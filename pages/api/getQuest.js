import { table, minifyRecords } from './utils/Airtable';

const getQuest = async (req, res) => {
  try {
    const id = req.params.id;
    const record = await table.find({ id }).firstPage();
    const minifiedRecord = minifyRecords(record);
    res.statusCode = 200;
    return res.json(minifiedRecord);
  } catch (e) {
    console.log(e);
    res.statusCode = 500;
    res.json({ error: e.message });
  }
}

export default getQuest;