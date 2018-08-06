const router = require('koa-router')({
  prefix: '/'
})

const indexControllers = require('../controllers/index.js');
const bookController = require('./../controllers/book');
const cors = require('./../middlewares/cors');

router.get('/', indexControllers.indexRender);
router.get('api/isbn', cors.allowAll,bookController.info);


module.exports = router