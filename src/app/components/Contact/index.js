import React from 'react'
import Image from 'next/image'
import contactImage from '/public/contact.png'
import callImage from '/public/call.svg'
import messageIamge from '/public/message.svg'
import * as S from './styles'


export default function Contact() {
    console.log(callImage)
    const infoList = [
        {
            name: '최영진',
            phoneNumber: '010-5050-0307',
        },
        {
            name: '안소진',
            phoneNumber: '010-5129-8290',
        },
        {
            name: '최장식',
            phoneNumber: '010-5239-7040',
        },
        {
            name: '안산욱',
            phoneNumber: '010-5129-8290',
        },
        {
            name: '정삼자',
            phoneNumber: '010-5394-6905',
        },
        {
            name: '장경희',
            phoneNumber: '010-5129-8290',
        },
    ]

    const contactHandler = (type, phoneNumber) => {
        if(type === 'call') {
            window.location.href = `tel:+${phoneNumber}`;
        }
        if(type === 'message') {
            
            window.location.href = `sms:${phoneNumber}?body=${''}`;
        }
        
    }
    return (
        <S.Container>
            <S.ContactImageBox>
                <Image
                    src={contactImage}
                    alt="Top Image"
                    className="top-image"
                    layout="responsive"
                    objectFit="contain" // 이미지의 비율을 유지하며 조정
                />
            </S.ContactImageBox>
            <S.ContactBox>
                {infoList.map((info, index) => (
                    <div key={`contact-info-${index}`}>
                        <S.Name>{info.name}</S.Name>
                        <S.ContactButtonBox>
                            <S.Call type='button' onClick={() => contactHandler('call', info.phoneNumber)}>
                                <Image src={callImage} alt='callImage'></Image>
                            </S.Call>
                            <S.Message type='button' onClick={() => contactHandler('message', info.phoneNumber)}>
                                <Image src={messageIamge} alt='messageIamge'></Image>
                            </S.Message>
                        </S.ContactButtonBox>
                    </div>
                ))}
            </S.ContactBox>
        </S.Container>
    )
}
