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
                    layout="responsive"
                    objectFit="contain"
                />
            </S.TopImageBox>
            <S.IntroImageBox>
                <Image
                    src={introImage}
                    alt="Intro Image"
                    layout="responsive"
                    objectFit="contain"
                />
            </S.IntroImageBox>
            <S.TextBox>
                안소진 / 최영진<br />
                2024년10월05일 오전12시20분<br />
                노비아갈라 동촌점 갈라판지아홀
            </S.TextBox>
        </S.Container>
    )
}