import { createContext, useState, useEffect } from "react";
import axios from "axios";


export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userList, setUserList] = useState([]);  

  useEffect(() => {
   
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        
        setUserList(response.data);
      })
      .catch((error) => {
        console.log("Error fetching users:", error); 
      });
  }, []);

  
  const addUser = (newUser) => {
   
    const userToAdd = { id: Date.now(), ...newUser };
    setUserList((prev) => [...prev, userToAdd]);
  };

  const deleteUser = (id) => {
    setUserList(userList.filter(user => user.id !== id));
  };

  
  return (
    <UserContext.Provider value={{ users: userList, addUser,deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};


