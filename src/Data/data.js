import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import { Link } from 'react-router-dom';
import './data.css';



const Data = () => {
  
  const users = useContext(UserContext); // Access users from context

  // Debugging: Log whenever usersId changes
 

  return (
    <div className='main-container'>
      <h1>Users List</h1>
      <ul className='container'>
        {users.map(user => (
        
        
         
          <li key={user.id} className='list-item'>
            <div className='section'>
            <p>{user.name}</p>
            {/* Call showUserDetails on button click */}
            <Link to={`/details/${user.id}`}>
            <button>
             Details
            </button>
            </Link>
            </div>
          </li>
        
        
          
        ))}
      </ul>

      {/* Only render Address component if usersId is set */}
    
    </div>
  );
};


export default Data;

  