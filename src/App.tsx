import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Member from './components/Member';

function App() {
  const [members,setMembers] = useState<string[]>([])
  const addMember = (member:string) =>{
    if(member){
      setMembers([...members,member]);
    }
  }
  return (
    <div className="App">
      <Header addMember={addMember}/>
      <Member/>
    </div>
  );
}

export default App;
