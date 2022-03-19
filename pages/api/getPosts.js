import { table, minifyRecords } from './utils/Airtable';

const getPosts = async (req, res) => {
  try {
    const records = await table.select({ view: 'posts' }).firstPage();
    const minifiedRecords = minifyRecords(records);
    res.statusCode = 200;
    return res.json(minifiedRecords);
  } catch (e) {
    console.log(e);
    res.statusCode = 500;
    res.json({ error: e.message });
  }
}

export default getPosts