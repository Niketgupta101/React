import React from 'react'
import styled from 'styled-components'

const Lang=styled.div`
flex-basis: 25%;
margin: 0 2%;
padding: 4px 0;
background: white;
label{
    text-align: left;
}
form-check{
    text-align: left;
}
`;
const Language = (props) => {
    return (
        <Lang>
            <div class="form-check bg-white">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label bg-white px-2" for="flexCheckDefault">
                    {props.label}
                </label>
            </div>
        </Lang>
    )
}

export default Language
