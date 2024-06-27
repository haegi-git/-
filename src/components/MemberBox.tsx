import styled, { css } from "styled-components"
import { MemberBoxPropsType } from "../types/type"

const Container = styled.div`
    border-left: 1px solid black;
    position: relative;
`


const Button = styled.button<{isWarning?: boolean}>`
    width: 50%;
    background-color: beige;
    border: none;
    border-top: 1px solid black;

    &:last-child{
        border-left: 1px solid black;
    }
    ${(props)=>
        props.isWarning && css `
            border-bottom-right-radius: 15px
        `
    }
`

const WarningBtn = styled.button`
    position: absolute;
    z-index: 2;
    top:15%;
    right: 10%;
    transform: translate(-10%,-10%);
    width: 30px;
    height: 30px;
    border-radius: 15px;
    cursor: pointer;
    background-color: red;
    border: none;
`

export default function MemberBox({
    memberOption,
    count,
    countUp,
    countDown,
    toggleCause
}:MemberBoxPropsType){

    const isWarning = memberOption === '경고';

    return(
        <Container>
            <p>{memberOption}</p>
                    <p>{count}</p>
                    <div>
                    <Button onClick={()=>countUp(memberOption)}>위</Button>
                    <Button isWarning={isWarning} onClick={()=>countDown(memberOption)}>아래</Button>
                    </div>
                {isWarning ? <WarningBtn onClick={toggleCause}>?</WarningBtn> : null}
        </Container>
    )
}