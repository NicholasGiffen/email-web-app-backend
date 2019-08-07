// /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
// /*  Route to handle root element: return uri's for available resources & note on authentication   */
// /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
​
'use strict';
​
const messages = require('../models/messages.model');
​
// const router = require('koa-router')(); // router middleware for koa
import * as Router from "koa-router";
const router: Router = new Router();
​
router.prefix('/message');

router.get('/get', messages.getMessages);
router.post('/add', messages.addMesseges);
​
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
​
module.exports = router.middleware();






