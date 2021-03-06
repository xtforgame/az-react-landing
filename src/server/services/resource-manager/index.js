// ========================================
import AsuOrm from 'az-sequelize-utils';
import {
  AuthCore,
  AuthProviderManager,
  KoaHelper,
  BasicProvider,
} from 'az-authn-kit-v2';
import {
  jwtIssuer,
} from 'config';
import AuthProviders from './AuthProviders';
import ServiceBase from '../ServiceBase';

import SequelizeStore from './SequelizeStore';

import createAsuModelDefs from '../../asu-model';

import initDatabase from './initDatabase';

// ========================================

export default class ResourceManager extends ServiceBase {
  static $name = 'resourceManager';

  static $type = 'service';

  static $inject = ['envCfg', 'sequelizeDb'];

  static $funcDeps = {
    start: ['sequelizeDb'],
  };

  constructor(envCfg, sequelizeDb) {
    super();
    this.jwtSecrets = envCfg.jwtSecrets;
    this.database = sequelizeDb.database;

    this.AuthProviders = AuthProviders;
    this.authKit = {
      authCore: new AuthCore(this.jwtSecrets, { algorithm: 'RS256', issuer: jwtIssuer }),
      sequelizeStore: new SequelizeStore({}),
      authProviderManager: new AuthProviderManager(
        this.AuthProviders.reduce((m, AuthProvider) => ({
          ...m,
          [AuthProvider.providerId]: {
            provider: AuthProvider,
          },
        }), {}),
        {},
      ),
    };
    this.authKit.koaHelper = new KoaHelper(this.authKit.authCore, this.authKit.authProviderManager);

    this.resourceManager = new AsuOrm(this.database, createAsuModelDefs());
  }

  onStart() {
    return Promise.all([
      this.authKit.sequelizeStore.setResourceManager(this.resourceManager),
      this.authKit.authProviderManager.setAccountLinkStore(this.authKit.sequelizeStore.getAccountLinkStore()),
    ])
    .then(() => initDatabase(this.resourceManager, false));
  }
}
