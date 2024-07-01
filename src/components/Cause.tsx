import styled from "styled-components"
import { CausePropsType } from "../types/type"
import { Close, FormInInput } from "../styled/styled"
import { handelInput } from "../utils/handelInput"
import { useState } from "react"

const Container = styled.div`
    position: absolute;
    background-color: rgba(0,0,0,0.7);
    width: 100%;
    height: 100%;
    z-index: 5;
    border-radius: 5px;
    top:0;
    left: 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CauseList = styled.div`
    position: absolute;
    top:30px;
    left:50%;
    width: 30%;
    height: 30%;
    background-color: azure;
    border-radius: 15px;
    transform: translate(-50%, 0);
    ul{
        text-align: left;
    }
    @media screen and (max-width: 800px) {
        width: 100%;
        height: 20%;
    }
`

export default function Cause({
    MemberName,
    toggleCause,
    causeAdd,
    member
}:CausePropsType){

    const [causeVal,setCauseVal] = useState<string>('')

    return(
        <Container>
            <CauseList>
            <h3>{MemberName}</h3>
            <ul>
                {member.warningCause.map((i,idx)=>
                    <li>{i}</li>
                )}
            </ul>
            </CauseList>
            <FormInInput onSubmit={(e)=>{causeAdd(causeVal,e)}}>
                <input type="text"
                value={causeVal}
                onChange={(e)=>{handelInput(setCauseVal,e)}}/>
                <button type="submit">작성</button>
                <Close onClick={toggleCause}>X</Close>
            </FormInInput>
        </Container>
    )
}