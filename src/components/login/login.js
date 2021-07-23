import React from 'react'
import styled from 'styled-components';
import Loginform from './Loginform';
import googleicon from '../photo/google icon.png'
import fbicon from'../photo/Vector.png'
import './login.css'

const Container=styled.div`
width: 40vw;
min-height: 90vh;
background-color: white;
border-radius: 10px;
position: absolute;
left: 30vw;
top: 5vh;
// display: flex;
padding: 40px;
flex-basis: 48%;
box-shadow: 0 24px 60px -30px #241448 ;
h3{
    justify-content: center;
    text-align: center;
    background: white;
    margin-bottom: 1rem;
}
h6{
    text-align: center;
    background: white;
}
`;

const login = () => {
    return (
        <Container>
            <h3>Login</h3>
            <hr />
            <Loginform />
            <h6>OR</h6>
            <button className="btn btn-outline-primary my-1 center"><img className='py-2 px-2' src={googleicon} alt="" /> Login with Google</button>
            <h6>OR</h6>
            <button className="btn btn-outline-primary my-1 center"><img className='py-1 px-2' src={fbicon} alt="" /> Login with Facebook</button>
        </Container>
    )
}

export default login
