const minifyRecords = records => records.map(record => minify(record));
const minify = record => {
  return { id: record.id, fields: record.fields };
}

export { minifyRecords };