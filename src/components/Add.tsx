import { useState } from "react"
import styled from "styled-components"
import { AddPropsType } from "../types/type"

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
    form{
        width: 500px;
        height: 250px;
        background-color: azure;
        border-radius: 15px;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    input{
        border: none;
        border-bottom:1px solid black;
        background-color: transparent;
        text-align: center;
        font-size: 28px;
    }
    input:focus{
        outline: none;
    }
    button{
        width: 70px;
        height: 35px;
        border-radius: 15px;
        background-color: lightcoral;
        border: none;
        margin-left: 15px;
    }
`

const Close = styled.div`
    position: absolute;
    top:0;
    right: 0;
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;
    padding: 15px;
`

export default function Add ({addMember,toggleAdd}:AddPropsType){
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
                <input
                  type="text"
                  placeholder="모임원 이름을 입력하세요."
                  value={member}
                  onChange={handelInput} />
                <button type="submit">생성</button>
                <Close onClick={toggleAdd}>X</Close>
            </form>
        </Container>
    )
}