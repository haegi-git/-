import styled from "styled-components";

export const FormInInput = styled.form`
        width: 30%;
        height: 30%;
        background-color: #E7EB90;
        border-radius: 15px;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        position: relative;
    input{
        border: none;
        border-bottom:1px solid black;
        background-color: transparent;
        text-align: center;
        padding: 5px;
    }
    input:focus{
        outline: none;
    }
    button{
        width: 15%;
        height: 15%;
        border-radius: 15px;
        background-color: #2274A5;
        color: #fff;
        border: 1px solid #2274A5;
        margin-left: 15px;
    }
    @media screen and (max-width:800px) {
        width: 100%;
        height: 20%;
    }
`

export const Close = styled.div`
position: absolute;
top:0;
right: 0;
font-size: 22px;
font-weight: bold;
cursor: pointer;
padding: 15px;
`