import { createContext, useState, useEffect } from "react";
import { table, minifyRecords } from '../pages/api/utils/airtable'

const QuestsContext = createContext();

const QuestsProvider = ({ children }) => {
  const [quests, setQuests] = useState([]);

  useEffect(async () => {
    try {
      const data = await table.select({ view: 'quests' }).firstPage()
      const records = minifyRecords(data.reverse());
      setQuests(records);
    } catch (e) {
      console.log(e)
    }
  }, []);

  return (
    <QuestsContext.Provider 
      value={{ 
        quests, 
        setQuests,
      }}
    >
      {children}
    </QuestsContext.Provider>
  );
}

export { QuestsProvider, QuestsContext };