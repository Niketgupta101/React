import React from 'react'
import styled from 'styled-components'
import Preformbottom from './Preformbottom';
import Preformmiddle from './Preformmiddle';
import Preformtop from './Preformtop';
import top from '../photo/Group 626104 (1).png'
import { Link } from 'react-router-dom';
import '../desktop-37/desktop37.css'

const Subcontainer=styled.div`
    width:100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: white !important;
    h2{
        font-size:28px;
        font-weight:600;
        color:#25252D;
        background: white;
    }
    span{
        text-decoration: none;
        font-size: 16px;
        font-weight: 600;
        color: rgba(135, 89, 242, 1);
        background: white;
    }
    section{
        width: 80%;
        position: absolute;
        left: 100px;
        bottom: 55px;
        display: flex;
        justify-content: space-between;
        background: white;
    }
`;

const Preferenceform=styled.div`
    background: white;
    width: 80%;
    position: relative;
    left: 10%;
`;

const Desktop41 = () => {
    return (
        <Subcontainer >
            <img className="top" src={top} alt=""></img>
            <h2>Set your Prefrences</h2>
            <Preferenceform>
                <Preformtop />
                <Preformmiddle />
                <Preformbottom />
            </Preferenceform>
            <section>
                <Link className='clear' to='/signup/subject'><span>Previous</span></Link>
                <div className='clear'>
                    <Link className='px-3 clear' to='/'><span>Skip</span></Link>
                    <Link className='btn btn-lg btn-primary px-4 py-1 mx-1' to='/'>Next</Link>
                </div>
            </section>
        </Subcontainer>
    )
}

export default Desktop41
