import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Footer = () => {
    return (

        <StyledFooter>
        <StyledSocialMedia>       
           <ul>

            <motion.li
            whileHover={{ scale: 2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}>

            <a href="https://github.com/norbeen" target="blank">
                Github
            </a> 
            </motion.li>

               <motion.li
            whileHover={{ scale: 2  }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}>  
            <a href ="http://norbeenbaral.blogspot.com" target="blank" > BlogSpot </a>
            </motion.li>


               <motion.li
            whileHover={{ scale: 2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}>
                <a href ="http://youtube.com/nabinbaral" target="blank" > Youtube</a>
                </motion.li>

               <motion.li
            whileHover={{ scale: 2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}>
                <a href="https://www.linkedin.com/in/nabin-baral-05922ba2" target="blank" >Linkedin</a>
            </motion.li>

               <motion.li
            whileHover={{ scale: 2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}>
                <a className="email" href="mailto:norbeen7@gmail.com" target="blank">Email Me</a>
                </motion.li>
           </ul>
           </StyledSocialMedia>


        </StyledFooter>
    )
}

const StyledFooter = styled.div`
min-height:10vh;
background-color:#3a2618;
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

/* 
    a:hover{
    background-color:#83c5be;
    border-radius:15%;
 
} */

/* .email:hover{
    background-color:#83c5be;
    border-radius:15%;
 
} */

`


export default Footer
