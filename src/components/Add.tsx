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

const Add = (
    addMember:()=>{}
) =>{

    const [member,setMember] = useState<string>('')

    const handelInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setMember(e.target.value)
        console.log(member)
    }
    return(
        <Container>
            <form action="#">
                <label htmlFor="#">이름</label>
                <input
                  type="text"
                  placeholder="모임원 이름을 입력하세요."
                  value={member}
                  onChange={handelInput} />
                <button onClick={addMember}>완료</button>
            </form>
        </Container>
    )
}

export default Add