import { useState } from "react"
import styled from "styled-components"

const Container = styled.div`
    width: 500px;
    height: 250px;
    background-color: aqua;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
`

type AddPropsType = {
    addMember: (member:string,e:React.FormEvent)=>void
}

export default function Add ({addMember}:AddPropsType){
    const [member,setMember] = useState<string>('')

    const handelInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setMember(e.target.value)
        console.log(member)
    }

    const handelSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        addMember(member,e)
    }
    return(
        <Container>
            <form onSubmit={handelSubmit} action="#">
                <label htmlFor="#">이름</label>
                <input
                  type="text"
                  placeholder="모임원 이름을 입력하세요."
                  value={member}
                  onChange={handelInput} />
                <button type="submit">생성</button>
            </form>
        </Container>
    )
}