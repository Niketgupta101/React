import React from 'react'
import styled from 'styled-components'
import img from '../photo/Password.png'

const Task=styled.div`
    width: 100%;
    height: 73.5px;
    // border: 1px solid blue;
    display: flex;
    // justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background: white;
    // text-align: center;
    button{
        position: absolute;
        right: 50px;
    }
    :hover{
        background: #f2f0f3;
        border-radius: 10px;
    }
`;
const Tasks = (props) => {
    return (
        <Task>
            <div className="ellipse-pink my-2">
                <img src={img} alt="" />
            </div>
            <div className="title">
                <h3>{props.name}</h3>
                <h4>Physics <span>(IITJEE)</span></h4>
            </div>
            <div className="title">
                <h3>Rs 25/q</h3>
                <h4><span>15 questions</span></h4>
            </div>
            <div className="title">
                <h3>{props.status}</h3>
                <h4><span>Status</span></h4>
            </div>
            <button className='btn btn-lg btn-outline-primary'>Continue</button>
        </Task>
    )
}

export default Tasks
