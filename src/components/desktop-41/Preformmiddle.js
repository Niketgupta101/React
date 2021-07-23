import React from 'react'
import styled from 'styled-components'
import Language from './Language';
const Middleline=styled.div`
    background: white;
    h3{
        padding: 5px 0;
        text-align: left;
        font-size:16px;
        font-weight: 600;
        color: #25252D;
        background: white;
    }
`;
const Languagebox=styled.div`
    padding: 5px 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background: #FCFBFD;
    border: 1px solid #EEEAF9;
    box-sizing: border-box;
    border-radius: 8px;
`;
const Preformmiddle = () => {
    return (
        <Middleline>
            <h3>Choose your preferred languages</h3>
            <Languagebox>
                <Language label='English'/>
                <Language label='Telugu'/>
                <Language label='French'/>
                <Language label='Hindi'/>
                <Language label='Tamil'/>
                <Language label='German'/>
                <Language label='Marathi'/>
                <Language label='Kashmiri'/>
                <Language label='Spanish'/>
                <Language label='Kanada'/>
                <Language label='Malayalam'/>
                <Language label='Russian'/>
            </Languagebox>
        </Middleline>
    )
}

export default Preformmiddle
