import React from 'react'
import styled from 'styled-components';


const Footer = () => {
    return (

        <StyledFooter>
        <StyledSocialMedia>       
           <ul>

               <li><a href="https://github.com/norbeen">Github</a> </li>
               <li>  <a href ="http://norbeenbaral.blogspot.com"> BlogSpot </a></li>
               <li><a href ="http://youtube.com/nabinbaral"> Youtube</a></li>
               <li><a href="https://www.linkedin.com/in/nabin-baral-05922ba2">Linkedin</a></li>
               <li><a className="email" href="mailto:norbeen7@gmail.com">Email Me</a></li>
           </ul>
           </StyledSocialMedia>


        </StyledFooter>
    )
}

const StyledFooter = styled.div`
min-height:10vh;
background-color:#073b4c;
display:flex;
justify-content:space-around;

h1{
    color:white;
}



`

const StyledSocialMedia = styled.div`
margin:auto;

width:40%;
ul{
   
    list-style:none;
    display:flex; 
    justify-content:space-between;

}
    a{
        color:white;
        text-decoration:none;
    }


    a:hover{
    background-color:#83c5be;
    border-radius:15%;
 
}

.email:hover{
    background-color:#83c5be;
    border-radius:15%;
 
}

`


export default Footer
