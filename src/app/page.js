'use client'
import Greeting from "./components/Greeting";
import Intro from "./components/Intro";
import styled from "styled-components";

export default function Home() {
	return (
		<main>
			<Intro />
			<Line />
			<Greeting />
			<Line />
		</main>
	);
}


const Line = styled.p`
    width: 100%;
    height: 1px;
    background-color: black;
`