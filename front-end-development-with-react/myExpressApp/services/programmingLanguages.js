const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  //const offset = helper.getOffset(page);
  const rows = await db.query(
    `SELECT * FROM test LIMIT 5;`
    //`select "hello world";`
  );
  //const data = helper.emptyOrRows(rows);
  //const meta = {page};

  return {
/*     data,
    meta */
    rows
  }
}

module.exports = {
  getMultiple
}
