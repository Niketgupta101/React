import React from 'react'
import styled from 'styled-components'

const Question=styled.div`
    margin-top: 1.5rem;
    background: white;
    display: flex;
    justify-content: space-between;
    h4{
        font-size: 16px;
        font-weight: 400;
        color: rgba(37, 37, 45, 1);
        flec-basis: 75%;
        background: white;
        justify-content: center;
        align-items: center;
    }
    button{
        // flex-basis: 12%;
        border: 1px solid #8759F2;
        box-sizing: border-box;
        border-radius: 4px;
        color:#8759F2;
    }
`;

const Preformbottom = () => {
    return (
        <Question>
            <h4>Do you have a Pen-tablet/i-pad with stylus/android tablet with stylus?</h4>
            <button type="button" class="btn btn-outline-info  px-4">Yes</button>
            <button type="button" class="btn btn-outline-info  px-4">No</button>
        </Question>
    )
}

export default Preformbottom
