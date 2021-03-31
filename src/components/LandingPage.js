import React from 'react'
import styled from 'styled-components';
import graduation from '../img/graduation.JPG'
import {Link}  from "react-router-dom";

const Top = () => {
    return (
        <StyledTop>


            <StyledText>

            <h1> Welcome to <span> my </span> page</h1>   
            <h3> I am <span> Nabin </span> Baral </h3> 
          
           <h3>
               graduate from <span> Morgan State University </span> on Dec 2020
           </h3>

           <h3>Know about me here!! </h3>

           <br/>


        <StyledButton>

   
            <Link className="link" to="/Achievement"> 
            <button>
            Achievement 
            </button>          
            </Link>

            <Link className="link" to="/Skill"> 
            <button>
             Skill 
            </button>     
            </Link>

            <Link className="link" to="/Project"> 
            <button>
             Project
            </button>  
            </Link>  

        </StyledButton>

            </StyledText>


            <StyledImg>
                <img src={graduation} alt="graduation image"/>
            </StyledImg>

        </StyledTop>
    )
}


const StyledTop = styled.div`



max-height:80vh;
display:flex;
margin:auto;
padding-top:0.3rem;
`


const StyledText = styled.div`

width:50%;
padding-left:2%;

`



const StyledImg = styled.div`
width:60%;

img{

    width:100%;
    height:100%;
    object-fit:cover;
    
    
}


`


const StyledButton = styled.div`

.link{

color:white;
text-decoration:none;

}


button{

    background-color:#073b4c;
    color:white;
    display:flex;
    padding:20px;
    margin:20px;
    width:40%;

}

button:hover{
    background-color:#83c5be;

}

`

export default Top;
