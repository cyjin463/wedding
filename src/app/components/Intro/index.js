'use client'
import Image from 'next/image'
import topImage from '/public/top_title.png'
import introImage from '/public/intro.jpg'
import * as S from './styles.js';

export default function Intro() {
    return (
        <S.Container>
            <S.TopImageBox>
                <Image
                    src={topImage}
                    alt="Top Image"
                    className="top-image"
                    layout="responsive"
                    objectFit="contain" // 이미지의 비율을 유지하며 조정
                />
            </S.TopImageBox>
            <S.IntroImageBox>
                <Image
                    src={introImage}
                    alt="Intro Image"
                    className="intro-image"
                    layout="responsive"
                    objectFit="contain" // 이미지의 비율을 유지하며 조정
                />
            </S.IntroImageBox>
            <S.textBox>
                안소진 / 최영진<br />
                2024년10월05일 오전12시20분<br />
                노비아갈라 동촌점 갈라판지아홀
            </S.textBox>
        </S.Container>
    )
} 