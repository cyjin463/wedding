'use client'
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
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
			<Contact />
			<Gallery />
		</main>
	);
}


const Line = styled.p`
    width: 94.4%;
    height: 1px;
	margin: auto;
    background-color: black;
`