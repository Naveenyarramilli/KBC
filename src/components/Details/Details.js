

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../UserContext'; 
import './Details.css'

const Details = () => {
  const { id } = useParams();
  const users = useContext(UserContext); // Access the context data


  // Find the user in the context based on the passed usersId
  const selectedUser = users.find(user => user.id === parseInt(id));
console.log(selectedUser)
  // If no user is found, display a message
  if (!selectedUser) {
    return <p>User not found</p>;
  }

  // If user is found, display the user's details
  return (
    <div className='details-container'>
      <h2>User Details for ID: {selectedUser.id}</h2>
      <p><strong>Name:</strong> {selectedUser.name}</p>
      <p><strong>Email:</strong> {selectedUser.email}</p>
      <p><strong>Phone:</strong> {selectedUser.phone}</p>
      <p><strong>Address:</strong> {selectedUser.address.street}, {selectedUser.address.city}</p>
    </div>
  );
};

export default Details;