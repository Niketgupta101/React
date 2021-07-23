import React from 'react'
import styled from 'styled-components'

const Firstline=styled.div`
    display: flex;
    justify-content: space-between;
    background: white;
    margin: 15px 0;
    div{
        display: flex;
        flex-direction: column;
        flex-basis: 42%
    }
    h3{
        text-align: left;
        font-size:13px;
        font-weight: 400;
        color: #25252D;
        background: white;
    }
`;
const Preformtop = () => {
    return (
        <Firstline>
            <div className="bg-white">
                <h3>Set your username</h3>
                <input type="text" class="form-control" placeholder="eg. John Doe" aria-label="First name" />
            </div>
            <div className="bg-white">
                <h3>Set your daily hour's</h3>
                <input type="Number" class="form-control" placeholder="01" aria-label="First name" />
            </div>
        </Firstline>
    )
}

export default Preformtop
