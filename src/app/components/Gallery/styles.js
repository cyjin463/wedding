import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
`

export const Title = styled.h2`
    margin: 5.6%;

    @media (max-width: 375px) {
        font-size: 20px;
    }
    @media (min-width: 376px) and (max-width: 750px) {
        font-size: 30px;
    }
    @media (min-width: 751px) {
        font-size: 40px;
    }
`
export const GalleryBox = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin: 0 5.6%;
`
export const GalleryButton = styled.button`
    width: 100%;
`

export const Video = styled.video`
    width: 88.8%;
    margin: 0 5.6%;
`