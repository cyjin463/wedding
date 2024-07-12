import styled from "styled-components";

export const GreetingContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
`

export const Couple = styled.h2`
    @media (max-width: 375px) {
        font-size: 20px;
    }
    @media (min-width: 375px) and (max-width: 750px) {
        font-size: 30px;
    }
    @media (min-width: 750px) {
        font-size: 40px;
    }
`

export const Message = styled.p`
    @media (max-width: 375px) {
        font-size: 15px;
    }
    @media (min-width: 375px) and (max-width: 750px) {
        font-size: 23px;
    }
    @media (min-width: 750px) {
        font-size: 30px;
    }
`

export const ParentsAndChildren = styled.p`
    @media (max-width: 375px) {
        font-size: 15px;
    }
    @media (min-width: 375px) and (max-width: 750px) {
        font-size: 23px;
    }
    @media (min-width: 750px) {
        font-size: 30px;
    }
`
