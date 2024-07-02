import { useState } from "react"
import Add from "./Add"
import styled from "styled-components"

type HeaderPropsType={
    addMember: (member:string,e:React.FormEvent)=>void
}

const Container = styled.div`
    header{
        margin-top: 15px;
    }
    button{
        width: 100px;
        height: 50px;
        border-radius: 15px;
        background-color: #2274A5;
        color: #fff;
        border: none;
        font-weight: bold;
        font-size:0.9rem;
        margin-top: 15px;
        margin-bottom: 15px;
        cursor: pointer;
    }
`

export default function Header ({addMember}:HeaderPropsType) {

    const [add,setAdd] = useState<boolean>(false)

    const toggleAdd = () =>{
        setAdd(!add)
    }
    return(
        <Container>
            <header>모임원 관리</header>
            <button onClick={toggleAdd}>모임원 추가</button>

            {add === true ? <Add
             toggleAdd={toggleAdd}
              addMember={addMember}
              add={add}/> : null}
        </Container>
    )
}