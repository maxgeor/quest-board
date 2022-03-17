const Airtable = require('airtable');
const base = new Airtable({ api_key: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);
const table = base(process.env.AIRTABLE_POST_TABLE_ID);

const minifyRecords = records => records.map(record => minify(record));
const minify = record => {
  return { id: record.id, fields: record.fields };
}

export { table, minifyRecords, minify };