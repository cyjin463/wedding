'use client'
import React from 'react'
import Image from 'next/image'
import video from '/public/video.mp4'
import { galleryImages } from './images'
import * as S from './styles'

export default function Gallery() {
    console.log(video)
    return (
        <S.Container>
            <S.Title>갤러리</S.Title>
            <S.GalleryBox>
                {galleryImages.map((image, index) => (
                    <S.GalleryButton key={index}>
                        <Image
                            src={image}
                            alt='galleryImage'
                            layout="responsive"
                            objectFit="contain" ></Image>
                    </S.GalleryButton>
                ))}
            </S.GalleryBox>
            <S.Title>영상</S.Title>
            <S.Video controls>
                <source src={video} type="video/mp4" />
            </S.Video>
        </S.Container>
    )
}