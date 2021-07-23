import React from 'react'
import Leftloginbox from './Leftloginbox';
import Sidephoto from './Sidephoto';
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

const Signup = () => {
    return (
        <Container>
            <Sidephoto />
            <Leftloginbox />
        </Container>
    )
}

export default Signup
