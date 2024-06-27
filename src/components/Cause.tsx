import styled from "styled-components"

type CausePropsType = {
    MemberName:string
}

const Container = styled.div`
    position: absolute;
    background-color: bisque;
    width: 700px;
    height: 400px;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 5;
    border-radius: 5px;
`

export default function Cause({
    MemberName
}:CausePropsType){
    return(
        <Container>
            <h3>{MemberName}님의 경고 사유</h3>

            <ul>
                <li>oooasdfsdfdfmlk</li>
            </ul>
        </Container>
    )
}