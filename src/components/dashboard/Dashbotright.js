import React from 'react'
import styled from 'styled-components'
import './Dashboard.css'
import coin from '../photo/image 82.png'
import XP from '../photo/Group 10104.png'
import progress from '../photo/Group 10103.png'
import leaderboard from '../photo/Group 625893.png'
import phone from '../photo/Stroke 1.png'
import email from '../photo/Message.png'
import facebook from '../photo/Vector.png'
import twitter from '../photo/Vector (1).png'
import insta from '../photo/instagram 1.png'
import linkedin from '../photo/Vector (3).png'

const Rightmost=styled.div`
    width:25vw;
    height: 1350px;
    // border: 1px solid black;
    position: absolute;
    left:73vw;
    top: 20vh;
    padding:1rem;
`;
const Dashbotright = () => {
    return (
        <Rightmost>
            <div className="right-first">
                <img src={coin} alt="" />
                <h3>255</h3>
                <h4>INR(Rs)</h4>
            </div>
            <div className="right-second">
                <div className="second-1">
                    <h3>Points Progress</h3>
                    <a href="https://localhost:3000">Edit Goal</a>
                </div>
                <img className='xp' src={XP} alt="" />
                <img className='progress' src={progress} alt="" />
            </div>
            <img className='leaderboard' src={leaderboard} alt="" />
            <div className="right-last">
                <h3>Contact Us</h3>
                <div className="phoneno">
                    <img src={phone} alt="" />
                    <p>+91 9986 756 4364<br/>  020-27656769</p>
                </div>
                <div className="email">
                    <img src={email} alt="" />
                    <p>support@syllabify.com</p>
                </div>
                <h4>Follow Us</h4>
                <div className="icons">
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={insta} alt="" />
                    <img src={linkedin} alt="" />
                </div>
            </div>
        </Rightmost>
    )
}

export default Dashbotright
