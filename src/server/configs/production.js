import path from 'path';
import appRootPath from 'app-root-path';

const appRoot = appRootPath.resolve('./');
const secretsFolder = process.env.VXL_AFS_SECRETS_FOLDER || path.join(appRoot, 'secrets');

const credentialFiles = {
  basePath: path.join(secretsFolder, 'ssl'),
  key: 'privatekey.pem',
  cert: 'certificate.pem',
};

const jwtSecretFiles = {
  basePath: path.join(secretsFolder, 'jwt'),
  private: 'jwtRS256.key',
  public: 'jwtRS256.key.pub',
};

const httpPort = 80;
const httpsPort = 443;

const sendRecoveryTokenInterval = 2 * 60 * 1000;
const externalUrl = 'https://rick.cloud/junjun';

const mailerConfig = {
  type: 'gmail',
  senderName: '"Vaxal" <no-reply@vaxal.io>',
  serviceName: 'Vaxal Service',
  domainName: 'vaxal.io',
  supportEmail: 'support@vaxal.io',
  credentialsFile: path.join(secretsFolder, 'gmail', 'credentials.json'),
  tokenFile: path.join(secretsFolder, 'gmail', 'token.json'),
};

const postgresPort = 5432;
const postgresUser = 'rick';
const postgresDbName = 'db_rick_data';
const postgresPassword = 'xxxx1234';
const postgresHost = 'postgres';

export {
  credentialFiles,
  jwtSecretFiles,
  httpPort,
  httpsPort,

  sendRecoveryTokenInterval,
  externalUrl,

  mailerConfig,

  postgresPort,
  postgresUser,
  postgresDbName,
  postgresPassword,
  postgresHost,
};
