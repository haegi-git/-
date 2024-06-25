import { useEffect, useState } from "react"
import styled from "styled-components"
import { memberType } from "../types/type"

const Container = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    margin: auto;
    > div{
        width: 100%;
        height: 100px;
        border: 1px solid black;
        display: flex;
        box-sizing: border-box;
        > div{
            width: 25%;
            border-left: 1px solid black;
        }
    }
`

const NameBox = styled.div`
    display: flex;
    flex-direction: column;
    >span{
        margin-top: 15px;
    }
`

const Box = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
    p:first-child{
        margin-top:8px;
    }
    p{
        margin: 0;
    }
    button{
        width: 50%;
        display: inline-block;
        background-color: #fff;
        border: none;
        border-top: 1px solid black;
        height: 30px;
        cursor: pointer;
    }
    button:last-child{
        border-left: 1px solid black;
    }
`

type MemberPropsType={
    member:memberType,
    updateMember:(member:memberType)=>void
}

export default function Member({member,updateMember}:MemberPropsType){
    const [late,setLate] = useState<number>(member.late)
    const [inactivity,setInactivity] = useState<number>(member.inactivity)
    const [warning,setWarning] = useState<number>(member.warning)

    useEffect(()=>{
        updateMember({...member, late,inactivity,warning})
    },[late,inactivity,warning])

    const handelCount = (count:string) =>{
        if(count === "late"){
            setLate(prevCount => prevCount + 1)
        }else if(count === 'warning'){
            setWarning(warning + 1)
        }else if(count === 'inactivity'){
            setInactivity(inactivity + 1)
        }
    }
    const handelCountDown = (count:string) =>{
        if(count === "late"){
            setLate(prevCount => prevCount - 1)
        }else if(count === 'warning'){
            setWarning(warning - 1)
        }else if(count === 'inactivity'){
            setInactivity(inactivity - 1)
        }
    }
    return(
        <Container>
            <div>
                <NameBox>
                    <span>이름</span>
                    <h3>{member.name}</h3>
                </NameBox>
                <Box>
                    <p>지각</p>
                    <p>{late}</p>
                    <div>
                    <button onClick={()=>handelCount('late')}>위</button>
                    <button onClick={()=>handelCountDown('late')}>아래</button>
                    </div>
                </Box>

                <Box>
                    <p>미활동</p>
                    <p>{inactivity}</p>
                    <div>
                    <button onClick={()=>handelCount('inactivity')}>위</button>
                    <button onClick={()=>handelCountDown('inactivity')}>아래</button>
                    </div>
                </Box>

                <Box>
                    <p>경고</p>
                    <p>{warning}</p>
                    <div>
                    <button onClick={()=>handelCount('warning')}>위</button>
                    <button onClick={()=>handelCountDown('warning')}>아래</button>
                    </div>
                </Box>
            </div>
        </Container>
    )
}