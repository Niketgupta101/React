import React from 'react'
import styled from 'styled-components'

const Inputblock=styled.div`
margin:1.2rem 0;
h4{
    padding: 2px 0;
    padding-right: 20px;
    background: white;
    font-size: 13px;
    font-weight: normal;
    margin:2px 0;
}
`;

const Input = (props) => {
    return (
        <Inputblock>
            <h4>{props.label}</h4>
            <input type={props.type} className="form-control py-2 px-2" placeholder={props.placeholder} />
        </Inputblock>
    )
}

export default Input
