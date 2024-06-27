import { useEffect, useState } from "react"
import styled from "styled-components"
import { MemberPropsType, memberType } from "../types/type"
import Cause from "./Cause"
import MemberBox from "./MemberBox"

const Container = styled.div`
    width: 80%;
    margin: auto;
    margin-top: 15px;
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    border: 1px solid black;
    margin-bottom: 15px;
    border-radius: 15px;
`

const NameBox = styled.div`
    display: flex;
    flex-direction: column;
    >span{
        margin-top: 15px;
    }
`

export default function Member({member,updateMember}:MemberPropsType){
    const [late,setLate] = useState<number>(member.late)
    const [inactivity,setInactivity] = useState<number>(member.inactivity)
    const [warning,setWarning] = useState<number>(member.warning)

    const[cause,setCause] = useState<Boolean>(false)

    useEffect(()=>{
        updateMember({...member, late,inactivity,warning})
    },[late,inactivity,warning])

    const countUp = (count:string) =>{
        if(count === "지각"){
            setLate(prevCount => prevCount + 1)
        }else if(count === "경고"){
            setWarning(warning + 1)
        }else if(count === "미활동"){
            setInactivity(inactivity + 1)
        }
    }
    const countDown = (count:string) =>{
        if(count === "지각"){
            setLate(prevCount => prevCount - 1)
        }else if(count === "경고"){
            setWarning(warning - 1)
        }else if(count === "미활동"){
            setInactivity(inactivity - 1)
        }
    }

    const toggleCause = () =>{
        setCause(!cause)
    }
    return(
        <Container>
        <GridContainer>
                <NameBox>
                    <span>이름</span>
                    <h3>{member.name}</h3>
                </NameBox>
                <MemberBox memberOption='지각' count={late} countUp={countUp} countDown={countDown}/>
                <MemberBox memberOption='미활동' count={inactivity} countUp={countUp} countDown={countDown}/>
                <MemberBox toggleCause={toggleCause} memberOption='경고' count={warning} countUp={countUp} countDown={countDown}/>
        </GridContainer>
        {cause === true ? <Cause MemberName={member.name}/> : null}
        </Container>
    )
}