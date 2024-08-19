import styled from "styled-components";

export const Container = styled.footer`

    background-color: #202329;
    padding:40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;


    div{
        display: flex;
        align-items:center ;
        justify-content: center;
        gap: 12px;


        font-weight: 700;
        font-size: 14px;
        line-height: 22px;
        color: #f5f5f5;
    }

    img{
        width: 26px;

        &:hover{
            opacity: 0.7;
        }
    }
`