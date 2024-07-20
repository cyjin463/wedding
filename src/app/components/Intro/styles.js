import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.section`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 0 5.6%;
    width: 100%;
`
export const TopImageBox = styled.div`
    padding: 9.6% 0 8.53%;
    width: 50%;

    > Image {
        width 100%;
    }
`

export const IntroImageBox = styled.div`
    width: 100%;
    > Image {
        width 100%;
    }
`
export const TextBox = styled.p`
    margin: 0;
    padding: 5.6% 0 7.2%;
    text-align: right;

    @media (max-width: 375px) {
        font-size: 16px;
    }
    @media (min-width: 376px) and (max-width: 750px) {
        font-size: 24px;
    }
    @media (min-width: 751px) {
        font-size: 24px;
    }
`

export const Line = styled.span`
    width: 100%;
    height: 1px;
    background-color: black;
`