import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Member from './components/Member';
import styled from 'styled-components';
import { memberType } from './types/type';

const Container = styled.div`
  text-align: center;
  box-sizing: border-box;
`

function App() {

  const [members,setMembers] = useState<memberType[]>([])

  useEffect(()=>{
    const storedMembers = localStorage.getItem('members');
    if(storedMembers){
      setMembers(JSON.parse(storedMembers));
    }
  },[])
  const addMember = (member:string,e:React.FormEvent) =>{
    e.preventDefault()
    if(member){
      const newMembers = [...members,
        {name:member,
           late:0,
           inactivity:0,
           warning:0,
           warningCause:[]}]
      setMembers(newMembers);
      localStorage.setItem('members',JSON.stringify(newMembers))
    }
  };

  const deleteButton = (deleteMember:string) =>{
        const deleteMembers = members.filter((member)=> member.name !== deleteMember)

        setMembers(deleteMembers)
        localStorage.setItem('members',JSON.stringify(deleteMembers))
        console.log(members)
  }

  const updateMember = (updatedMember:memberType) => {
    const newMembers = members.map
    (member => member.name === updatedMember.name ? updatedMember : member);
    setMembers(newMembers);
    localStorage.setItem('members',JSON.stringify(newMembers))
  }

  return (
    <Container>
      <Header addMember={addMember}/>
      {members.map((member)=>
        <Member key={member.name}
        member={member}
        updateMember={updateMember}
        deleteButton={deleteButton}
        />
      )}
    </Container>
  );
}

export default App;
