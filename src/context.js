import React, { useState, useContext } from "react";
import usersData from "./Data.json";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState(usersData[0]);
  const [isClicked, setIsClicked] = useState(false);

  const toggleIsClicked = () => {
    setIsClicked(!isClicked);
    console.log(isClicked);
  };

  const setActiveFilter = (id) => {
    const filteredUser = usersData.filter((user) => user.account_id === id);
    setActiveUser(...filteredUser);
    console.log(activeUser);
  };

  return (
    <AppContext.Provider
      value={{
        usersData,
        activeUser,
        setActiveFilter,
        toggleIsClicked,
        isClicked,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
