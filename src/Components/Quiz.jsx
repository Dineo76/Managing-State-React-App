import { useState } from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }
// (e) eventlistner 
  function handleLastNameChange(e) {
    setLastName(e.target.value);R
  }

  return (
    <>
    <div className='checkIn'>
      <h2>Let’s check you in </h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        /> 
      </label>
      <label><br />
       <br /> 
        Last name:{' '} 
        <input 
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label><br /> <br /> 
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
      </div>
   
    </>
  );
}