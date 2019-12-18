import React, { useState } from 'react';
import TeamForm from './components/Form/TeamForm';
import Team from './components/Form/Team'
import './App.css'


function App() {
  const [member, setMember] = useState([
    {
      id: 1,
      name: 'Issac M.',
      email: 'issacmoreno10@yahoo.com',
      role: 'React'
    }
  ]);

  const addMember = members => {
    setMember([...member, members]);
  };  
  
  // const editMember = info => {
  //   const editMember = member.map(member => {
  //     return 
  //   });
  //   setMember(editMember);
  // }
  // console.log(editMember);

  const deleteMember = info => {
    const newMembers = member.filter(member => {
      return member.id !== info;
    });
    setMember(newMembers);
  }



  return (
    <div className = 'App'>
      <h1>Join the Team</h1>
      <div className = 'form-box'>
        <TeamForm addMember = {addMember}/>

        <Team member = {member} deleteMember = {deleteMember}/>
      </div>
    </div>
  );
}

export default App;
