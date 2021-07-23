import React from 'react'
import styled from 'styled-components'
import notification from '../photo/Notification.png'
import './Dashboard.css'
import { Link } from "react-router-dom";

const Header= styled.div`
    height: 60px;
    width: 100%;
    background: white;
    display: flex;
    flex-direction: row-reverse;
    justify-context: right;
    text-align: right;
    align-items: center;
    h3{
        font-size: 17px;
        margin: 0 20px;
        background: white;
        flex-shrink:1;
    }
    span{
        color:rgba(94, 108, 132, 1);
        background: white;
    }
    Link{
        margin-left: 20px;
        flex-shrink:1;
    }
    img{
        margin: 0 10px;
        margin-right: 30px;
        flex-shrink:1;
    }
`;
const Dashtop = () => {
    return (
        <Header>
            <Link className='clear btn btn-outline-primary mx-4' to="/signup">Sign Up</Link>
            <Link className='clear btn btn-outline-primary' to="/login" >Login</Link>
            <img src={notification} alt="" />
            <h3>255 <span>INR</span></h3>
            <h3>2500 <span>XP</span></h3>
        </Header>
    )
}

export default Dashtop
