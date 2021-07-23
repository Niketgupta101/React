import React from 'react'
import Desktop37 from './Desktop37';
import styled from 'styled-components';

const Container=styled.div`
width: 60vw;
min-height: 85vh;
background-color: white;
border-radius: 10px;
position: absolute;
left: 20vw;
top: 5vh;
display: flex;
padding: 40px;
flex-basis: 48%;
box-shadow: 0 24px 60px -30px #241448 ;
`;

const Signsubject = () => {
    return (
        <Container>
            <Desktop37 />
        </Container>
    )
}

export default Signsubject
