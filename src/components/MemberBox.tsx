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
    cursor: pointer;
    @media screen and (max-width:800px) {
        font-size:12px
    }
    &:last-child{
        border-left: 1px solid black;
    }
    ${(props)=>
        props.isWarning && css `
            border-bottom-right-radius: 15px
        `
    }
`

const WarningP = styled.p`
    color: red;
    cursor: pointer;
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
            
                {isWarning ? <WarningP onClick={toggleCause}>{memberOption}</WarningP> : <p>{memberOption}</p>}
            
                    <p>{count}</p>
                    <div>
                    <Button onClick={()=>countUp(memberOption)}>위</Button>
                    <Button isWarning={isWarning} onClick={()=>countDown(memberOption)}>아래</Button>
                    </div>
        </Container>
    )
}