import { createContext, useState } from "react";

export const CategoryContext = createContext();

export const CategoryContextProvider = ({children}) => {

    const [updateCategories,setUpdateCategories] = useState(true);

  return (
    <CategoryContext.Provider value={{
        updateCategories,setUpdateCategories,
    }}>
        {children}
    </CategoryContext.Provider>
  );
}
