'use client'
import React from 'react'
import * as S from './styles'

export default function Greeting() {
    return (
        <S.GreetingContainer>
            <S.Couple>안소진❤︎최영진</S.Couple>
            <S.Message>
                햇살처럼 따뜻하게 안아줄 수 있는<br />
                늘 곁에서 서로를 웃게 해줄 수 있는<br />
                소중한 사람을 만났습니다.<br />
                <br />
                가득한 10월<br />
                결혼합니다.<br />
                <br />
                기쁜 날, 가까이서 축복해 주시면<br />
                더 없는 기쁨으로 간직하겠습니다.<br />
            </S.Message>
            <S.ParentsAndChildren>
                정삼자, 최장식의 아들 영진<br />
                안산욱, 장경희의 딸 소진
            </S.ParentsAndChildren>
        </S.GreetingContainer>
    )
}
