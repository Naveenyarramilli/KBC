import React, { useState, useEffect } from 'react';
import { UserContext } from '../../UserContext';
; // Import the context

function UserProvider({ children }) {
  const [data, setData] = useState([]);

  // Fetch data from API when the component mounts
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    
    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  return (
    // Provide the fetched data to the context
    <UserContext.Provider value={data}>
        {children}
    </UserContext.Provider>
  );
}

export default UserProvider;