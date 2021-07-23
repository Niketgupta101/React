import React from 'react'
import styled from 'styled-components'
import Checkboxitem from './Checkboxitem';
import img1 from '../photo/mathematics.png';
import img2 from '../photo/chemistry.png';
import img3 from '../photo/physics.png';
import img4 from '../photo/biology.png';
import img5 from '../photo/logicalreasoning.png';
import img6 from '../photo/others.png';
import top from '../photo/Group 626104.png'
import { Link } from 'react-router-dom';
import './desktop37.css'

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
    p{
        font-size:16px;
        font-weight:400;
        color:#828282;
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
        bottom: 42px;
        display: flex;
        justify-content: space-between;
        background: white;
    }
`;
const Checkbox=styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 1.5rem;
    background: #FCFBFD;
`;
const Desktop37 = () => {
    return (
        <Subcontainer >
            <img className="top" src={top} alt=""></img>
            <h2>What subjects do you specialise in?</h2>
            <p>You can add more than 1 subject</p>
            <Checkbox>
                <Checkboxitem name='Mathematics' path={img1} />
                <Checkboxitem name='Chemistry' path={img2} />
                <Checkboxitem name='Physics' path={img3} />
                <Checkboxitem name='Biology' path={img4} />
                <Checkboxitem name='Logical Reasoning' path={img5} />
                <Checkboxitem name='Others' path={img6} />
            </Checkbox>
            <section>
                <Link className='clear' to='/signup'><span>Previous</span></Link>
                <div className='clear'>
                    <Link className='px-3 clear' to='/'><span>Skip</span></Link>
                    <Link className='btn btn-lg btn-primary px-4 py-1 mx-1' to='/signup/subject/preference'>Next</Link>
                </div>
            </section>
        </Subcontainer>
    )
}

export default Desktop37
