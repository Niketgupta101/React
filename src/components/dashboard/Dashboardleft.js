import React from 'react'
import styled from 'styled-components'
import logo from '../photo/Group 173.png'
import dashboard from '../photo/Category.png'
import task from '../photo/Work.png'
import performance from '../photo/Activity.png'
import earning from '../photo/Wallet.png'
import profile from '../photo/Profile.png'
import './Dashboard.css'

const Container=styled.div`
    position: absolute;
    width: 13vw;
    height: 1531px;
    border-right: 1px solid #DFE1E6;
    left: 0px;
    top: 0px;
    background: #FFFFFF;
    justify-content: center;
    header{
        display: flex;
        background: white;
    }
    header img{
        height: 30px;
        width: 35px;
        position: absolute;
        left: 20px;
        top: 20px;
        background: white;
    }
    h2{
        font-size: 22px;
        font-weight: 700;
        position: absolute;
        left: 62px;
        top: 20px;
        background: white;
    }
    ul{
        width: 100%;
        position: absolute;
        padding: 0 !important;
        top: 100px;
        background: white;
    }
    li{
        list-style:none;
        font-size: 14px;
        font-weight: 600;
        color: black;
        padding: 0 5px;
        background: transparent;
    }
    a{
        text-decoration: none;
        display: flex;
        width: 90%;
        height: 40px;
        background: white;
        align-items: center;
        padding: 0 2rem;
    }
    a img{
        width: 16px;
        height: 16px;
        color: black;
        padding-top:1px;
    }
`;
const Dashboardleft = () => {
    return (
        <Container>
            <header>
                <img src={logo} alt="" />
                <h2>Company</h2>
            </header>
            <navbar>
                <ul>
                    <a className='navlinks' href="http://localhost:3000"><img src={dashboard} alt="" /><li>Dashboard</li></a>
                    <a className='navlinks' href="http://localhost:3000"><img src={task} alt="" /><li>Tasks</li></a>
                    <a className='navlinks' href="http://localhost:3000"><img src={performance} alt="" /><li>Performance</li></a>
                    <a className='navlinks' href="http://localhost:3000"><img src={earning} alt="" /><li>Earning</li></a>
                    <a className='navlinks' href="http://localhost:3000"><img src={profile} alt="" /><li>Profile</li></a>
                </ul>
            </navbar>
        </Container>
    )
}

export default Dashboardleft
