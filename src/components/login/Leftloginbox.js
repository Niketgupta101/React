import React from 'react'
import styled from 'styled-components'
import Form from './Form';
import { Link } from 'react-router-dom';
import logo from '../photo/Group 173.png'
import google from '../photo/Group 7426.png';

const Logincontainer= styled.div`
    width:45%;
    height:100%;
    box-sizing: border-box;
    padding: 0 0;
    font-size: 13px;
    background: white;

    h3{
        font-size: 18px;
        font-weight: bold;
        padding-bottom: 3px;
        background: white;
    }
    button{
        background: #8759F2 !important;
        border-radius: 4px;
    }
    h5{
        font-size:14px;
        color:#828282;
        font-weight: 400;
    }
    .last{
        display:flex;
        padding: 0 3px;
        backgroung: white;
    }
    span{
        font-size:14px;
        font-weight: 600;
        color: #8759F2;
    }
    h2{
        font-size:16px;
        font-weight:400;
        color:#828282;
    }
    header{
        display: flex;
        background: white;
    }
    header img{
        height: 30px;
        width: 38px;
        // position: absolute;
        // left: 20px;
        // top: 20px;
        margin-right: 15px;
        margin-bottom: 1.5rem;
        background: white;
    }
    h1{
        font-size: 22px;
        font-weight: 700;
        // position: absolute;
        // left: 62px;
        // top: 20px;
        background: white;
    }
    h2 a img{
        border-radius: 20px;
        box-shadow: 0px 24px 60px -30px rgba(0, 0, 0, 0.1);
    }

`;
const leftloginbox = () => {
    return (
        <Logincontainer className='mx-2 px-4'>
            <header>
                <img src={logo} alt="" />
                <h1>Company</h1>
            </header>
            <h3>Register</h3>
            <Form />
            <div className='last bg-white'>
                <Link to='/signup/subject' class="btn py-2 px-3 btn-primary">Sign Up {'>'}</Link>
                <div className='px-3 bg-white'>
                    <h5 className='bg-white'>Already have an account? <br /><span className='bg-white'>Login here</span></h5>
                </div>
            </div>
            <h2 className='bg-white my-4'>Or Sign Up with <a href="http://localhost:3000/signup" className="clear"><img src={google} alt="" /></a></h2>
        </Logincontainer>
    )
}

export default leftloginbox
