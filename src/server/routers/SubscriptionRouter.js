import Sequelize from 'sequelize';
import {
  // RestfulResponse,
  RestfulError,
} from 'az-restful-helpers';
import RouterBase from '../core/router-base';

export default class SubscriptionRouter extends RouterBase {
  findSubscriptions(userId, type) {
    const Subscription = this.resourceManager.getSqlzModel('subscription');

    return Subscription.findAll({});
  }

  setupRoutes({ router }) {
    router.get('/api/subscriptions', this.authKit.koaHelper.getIdentity, (ctx, next) => {
      // console.log('ctx.local.userSession :', ctx.local.userSession);

      if (!ctx.local.userSession || !ctx.local.userSession.user_id) {
        return RestfulError.koaThrowWith(ctx, 404, 'User not found');
      }
      return this.findSubscriptions(ctx.local.userSession.user_id)
      .then((result) => {
        ctx.body = result;
      });
    });

    router.post('/api/subscriptions', this.authKit.koaHelper.getIdentity, (ctx, next) => {
      const Subscription = this.resourceManager.getSqlzModel('subscription');
      return Subscription.create({
        name: ctx.request.body.name,
        email: ctx.request.body.email,
        data: ctx.request.body.data,
      })
      .then((result) => {
        ctx.body = result;
      });
    });
  }
}
