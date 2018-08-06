const axios = require('axios');
const ISBNAPI = 'https://api.douban.com/v2/book/isbn/';
// const mock_id = '9787121317989';

const douban = {
  isbn:function(isbn){
    return new Promise((resolve,reject) => {
      axios.get(ISBNAPI + isbn).then( res => {
        resolve(res.data)
      }).catch( err => {
        reject(err.response.data)
      })
    })
  }
}

module.exports = douban;