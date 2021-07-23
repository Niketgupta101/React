import React from 'react'
import styled from "styled-components"
import img from '../photo/Rectangle.png';

const Photo = styled.div`
    width: 55%;
    background-image: url(${img});
    background-position:center;
    background-size: cover;
    background-repeat: no-repeat;
    box-border: 10px;
    overlap: hidden;
    border-radius: 10px;
`;

const sidephoto = () => {

    return (
        <Photo></Photo>
    )
}
export default sidephoto
