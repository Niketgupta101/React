import React from 'react'
import styled from 'styled-components'
import './desktop37.css'
const Item=styled.div`
    width:32%;
    height:110px;
    margin: 1rem 0;
    h3{
        display: inline-block;
        height: 20px;
        font-size: 16px;
        font-weight: 600;
        color: #25252D;
        position: relative;
        bottom: -37px;
        left: -10px;
        background: #FCFBFD;
    }
    .form-check{
        width:100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        background: #FCFBFD;
        border: 1px solid rgba(135, 89, 242, 1);
        box-sizing: border-box;
        border-radius: 8px;
    }
    img{
        width:80px;
        height: 80px;
        position: relative;
        bottom: -10px;
        left: -10px;
        overflow: hidden;
        border-radius: 8px;
        align-items: center;
    }
    input{
        position: relative;
        left: -8px;
        bottom: -4px;
        outline: none;
    }
`;
const Checkboxitem = (props) => {
    return (
        <Item>
            <div class="form-check">
                <img src={props.path} alt=""/>
                <h3>{props.name}</h3>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            </div>
        </Item>
    )
}

export default Checkboxitem
