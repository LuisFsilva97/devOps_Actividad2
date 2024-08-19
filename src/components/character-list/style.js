import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    min-height: 650px;
    padding: 50px;
    background-color: #272b33;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 520px) {
        padding: 16px;
        gap: 12px;
    }
`

export const ContainerList = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`