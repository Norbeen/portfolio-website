import React from 'react'
import styled from 'styled-components';


const Footer = () => {
    return (

        <StyledFooter>

            <h1>footer</h1>

        </StyledFooter>
    )
}

const StyledFooter = styled.div`
min-height:10vh;
background-color:black;


h1{
    color:white;
}

`

export default Footer
