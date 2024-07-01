import styled from "styled-components"
import { DeletePropsType, memberType } from "../types/type"

const DeleteContainer = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    button{
        width: 200px;
        height: 100px;
        background-color: green;
        border-radius: 15px;
        border: none;
        cursor: pointer;
    }
`

export function Delete({
    deleteButton,
    memberName,
    toggleDelete
}:DeletePropsType){
    return(
        <DeleteContainer>
            <button onClick={()=>
                {deleteButton(memberName);
                    toggleDelete()
                }}>삭제</button>
        </DeleteContainer>
    )
}