import { useState } from "react"
import styled from "styled-components"
import { AddPropsType } from "../types/type"
import { Close, FormInInput } from "../styled/styled"
import { handelInput } from "../utils/handelInput"

const Container = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 3;
`

export default function Add ({addMember,toggleAdd}:AddPropsType){
    const [member,setMember] = useState<string>('')

    const handelSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        addMember(member,e)
        toggleAdd()
    }
    return(
        <Container>
            <FormInInput onSubmit={handelSubmit} action="#">
            <input
                  type="text"
                  placeholder="모임원 이름을 입력하세요."
                  value={member}
                  onChange={(e)=>{handelInput(setMember,e)}} />
                <button type="submit">생성</button>
                <Close onClick={toggleAdd}>X</Close>
            </FormInInput>
        </Container>
    )
}