import React from 'react'
import styled from 'styled-components'
import './Dashboard.css'
import first from '../photo/Paper Fail.png'
import second from '../photo/Paper Plus.png'
import pinkarr from '../photo/Path (2).png'
import greenarr from '../photo/Path.png'

const Middletop=styled.div`
    width: 60vw;
    height: 265px;
    // border: 1px solid black;
    position: absolute;
    top: 60px;
    left: 13vw;
    padding: 0.5rem 1rem;
    h2{
        font-size: 28px;
        font-weight: 600;
        color: rgba(37, 37, 45, 1);
        margin: 1.5rem 0;
    }
`;
const Card=styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
`;
const Midtop = () => {
    return (
        <Middletop>
            <h2>Welcome Back, Nishtha!</h2>
            <Card>
                <div className="firstcard">
                    <div className="ellipse-pink my-2">
                        <img src={first} alt="" />
                    </div>
                    <h3>See What's on priority?</h3>
                    <div className="flex">
                    <p>Complete <span>12 rejected questions</span> to earn <span>Rs 30/q</span></p>
                    <img src={pinkarr} alt="" className="arrow" />
                    </div>
                </div>
                <div className="secondcard">
                    <div className="ellipse-green my-2">
                        <img src={second} alt="" />
                    </div>
                    <p>New tasks</p>
                    <div className="flex">
                    <h3>12</h3>
                    <img src={greenarr} alt="" className="arrow" />
                    </div>
                </div>
            </Card>
        </Middletop>
    )
}

export default Midtop
