import { createContext, useState } from "react";

const QuestsContext = createContext();

const QuestsProvider = ({ children }) => {
  const [quests, setQuests] = useState([]);

  return (
    <QuestsContext.Provider 
      value={{ 
            quests, 
            setQuests,
            getQuest,
            getQuests,
      }}
    >
      {children}
    </QuestsContext.Provider>
  );
}

export { QuestsProvider, QuestsContext };