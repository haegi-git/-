import styled from "styled-components"

type CausePropsType = {
    MemberName:string
}

const Container = styled.div`
    position: absolute;
    background-color: rgba(0,0,0,0.7);
    width: 100%;
    height: 100%;
    z-index: 5;
    border-radius: 5px;
    top:0;
    left: 0%;
    div{
        width: 500px;
        height: 300px;
        background-color: beige;
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
`

export default function Cause({
    MemberName
}:CausePropsType){
    return(
        <Container>
            <div>
                <h3>이름</h3>
                <ul>
                    <li>경고사유</li>
                </ul>
            </div>
        </Container>
    )
}