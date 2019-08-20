const messageService = require("../services/messages.service");

export default class MessageModel {

  static async getMessages(ctx) { //ctx part of koa framework
    try {
      const data = await messageService.getMessages(ctx);
      ctx.body = data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
  
  static async addMessages(ctx) { //ctx part of koa framework
    try {
      const data = await messageService.addMessages(ctx);
      ctx.body = data;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

module.exports = MessageModel;