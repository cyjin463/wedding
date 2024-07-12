import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 5.6%;
    width: 100%;
    border-bottom: 1px solid black;
`

export const TopImageBox = styled.div`
    padding: 9.6% 0 8.53%;
    width: 50%;

    > Image {
        width 100%;
    }
`

export const IntroImageBox = styled.div`
    box-sizing: border-box;
    maring: auto;
    width: 100%;
    > Image {
        width 100%;
    }
`
export const textBox = styled.p`
    margin: 0;
    padding: 5.6% 0 7.2%;
    text-align: right;

    @media (max-width: 375px) {
        font-size: 16px;
    }
    @media (min-width: 375px) and (max-width: 750px) {
        font-size: 24px;
    }
    @media (min-width: 750px) {
        font-size: 32px;
    }
`