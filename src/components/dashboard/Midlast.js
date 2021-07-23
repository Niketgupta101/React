import React from 'react'
import styled from 'styled-components'
import Dropbar from './Dropbar';

const Middlelast= styled.div`
    width:60vw;
    min-height:400px;
    position: absolute;
    left: 13vw;
    top:955px;
    // border: 1px solid black;
    padding: 1rem;
    h3{
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 1rem;
        background: white;
    }
`;

const Midlast = () => {
    return (
        <Middlelast>
            <div className="lastcontainer bg-white">
            <h3>Best Practices</h3>
            <hr />
            <Dropbar title='Tips for Meta-tagging solutions' number='headingOne' databstarget="#collapseOne" id="collapseOne"/>
            <Dropbar title='Tips for Solving questions' number='headingTwo' databstarget="#collapseTwo" id="collapseTwo"/>
            <Dropbar title='How many seats are available' number='headingThree' databstarget="#collapseThree" id="collapseThree"/>
            <Dropbar title='Strategies for error finding' number='headingFour' databstarget="#collapseFour" id="collapseFour"/>
            <Dropbar title='How to make Video solutions' number='headingFive' databstarget="#collapseFive" id="collapseFive"/>
            </div>
        </Middlelast>
    )
}

export default Midlast
