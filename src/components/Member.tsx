import { useState } from "react"
import styled from "styled-components"

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
        >span{
            width: 25%;
        }
        div{
            width: 25%;
            border-left: 1px solid black;
        }
    }
`

const Member = () =>{
    const [late,setLate] = useState<number>(0)
    const [warning,setWarning] = useState<number>(0)
    const [inactivity,setInactivity] = useState<number>(0)

    const handelCount = (count:string) =>{
        if(count === "late"){
            setLate(prevCount => prevCount + 1)
        }else if(count === 'warning'){
            setWarning(warning + 1)
        }else if(count === 'inactivity'){
            setInactivity(inactivity + 1)
        }
    }
    return(
        <Container>
            <div>
                <div>
                    <span>이름</span>
                    <h1>머시기</h1>
                </div>
                <div>
                    <p>지각</p>
                    <p>{late}</p>
                    <button onClick={()=>handelCount('late')}>위</button>
                    <button>아래</button>
                </div>

                <div>
                    <p>미활동</p>
                    <p>{inactivity}</p>
                    <button onClick={()=>handelCount("inactivity")}>위</button>
                    <button>아래</button>
                </div>

                <div>
                    <p>경고</p>
                    <p>{warning}</p>
                    <button onClick={()=>handelCount("warning")}>위</button>
                    <button>아래</button>
                </div>
            </div>
        </Container>
    )
}
export default Member