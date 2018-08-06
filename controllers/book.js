const doubanModel = require('./../models/douban');

const book = {
  info:async function(ctx, next){
    const ISBN = ctx.query.isbn;
    if(!ISBN){
      ctx.body = { code: 0,msg: 'isbn empty!'}
      return
    }
    try{
      const data = await doubanModel.isbn(ISBN);
      ctx.body = { code: 200, data: data }
    }catch(err) {
      ctx.body = err
    }
  }
}

module.exports = book;