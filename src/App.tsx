import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Member from './components/Member';
import styled from 'styled-components';
import { memberType } from './types/type';

const Container = styled.div`
  text-align: center;
`

function App() {

  const [members,setMembers] = useState<{name:string,late:number,inactivity:number,warning:number}[]>([])

  useEffect(()=>{
    const storedMembers = localStorage.getItem('members');
    if(storedMembers){
      setMembers(JSON.parse(storedMembers));
    }
  },[])
  const addMember = (member:string,e:React.FormEvent) =>{
    e.preventDefault()
    if(member){
      const newMembers = [...members,{name:member, late:0,inactivity:0,warning:0}]
      setMembers(newMembers);
      localStorage.setItem('members',JSON.stringify(newMembers))
    }
  };

  const updateMember = (updatedMember:memberType) => {
    const newMembers = members.map(member => member.name === updatedMember.name ? updatedMember : member);
    setMembers(newMembers);
    localStorage.setItem('members',JSON.stringify(newMembers))
  }

  return (
    <Container>
      <Header addMember={addMember}/>
      {members.map((member,index)=>
        <Member key={index} member={member} updateMember={updateMember}/>
      )}
    </Container>
  );
}

export default App;
