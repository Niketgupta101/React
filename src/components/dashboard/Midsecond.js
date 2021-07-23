import React from 'react'
import styled from 'styled-components'
import './Dashboard.css'
import Tasks from './Tasks';

const Middlesecond=styled.div`
    width:60vw;
    height: 630px;
    // border: 1px solid red;
    position: absolute;
    left:13vw;
    top:325px;
    padding: 0.5rem 1rem;
    a{
        text-decoration: none;
        color: rgb(247, 34, 165);
        font-size: 17px;
        background: white;
    }
    h3{
        font-size:22px;
        font-weight: 700;
        background: white;
    }
    h5{
        font-size: 16px;
        font-weight: 400;
        color: rgba(110, 110, 134, 1);
        background: white;
    }
`;
const Midsecond = () => {
    return (
        <Middlesecond>
            <div className="midcontainer bg-white">
                <h3>Complete tasks to start at Syllabify!</h3>
                <div className="flex bg-white">
                    <h5>select one to proceed</h5>
                    <a href="http://localhost:3000">View All</a>
                </div>
                <hr />
                <h5>Friday : 22nd March, 2020</h5>
                <Tasks className='problems' name='Assignment #13' status='Assigned'/>
                <Tasks className='problems' name='Assignment #15' status='70% Completed'/>
                <Tasks className='problems' name='Assignment #16' status='Rejected (1/15)'/>
                <Tasks className='problems' name='Assignment #13' status='Assigned'/>
                <Tasks className='problems' name='Assignment #15' status='Completed'/>
                <Tasks className='problems' name='Assignment #16' status='Rejected (1/15)'/>
            </div>
        </Middlesecond>
    )
}

export default Midsecond
