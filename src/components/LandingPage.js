import React from 'react'
import styled from 'styled-components';
import {Link}  from "react-router-dom";
import {
    motion,
    useSpring,
    useMotionValue,
    useMotionTemplate,
    useAnimation
  } from "framer-motion"


const Top = () => {

    const controls = useAnimation()
    const backgroundImage ="https://images.pexels.com/photos/273238/pexels-photo-273238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
  
    return (
        <StyledTop>


            <StyledText>
   

            <h1> Hi there <span> my </span> friends</h1>   

            <h1> I am <span> Nabin </span> Baral </h1> 
         


           <br/>


        <StyledButton>

   
            <Link className="link" to="/Achievement"> 
            <motion.button
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            whileTap={{ scale: 0.8 }}
            >

            Achievement 
            </motion.button>          
            </Link>

            <Link className="link" to="/Skill"> 

            <motion.button
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            whileTap={{ scale: 0.8 }}
            >
             Skill 
            </motion.button>     
            </Link>

            <Link className="link" to="/Project">

            <motion.button
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            whileTap={{ scale: 0.8 }}
            >
             Project
            </motion.button> 

            </Link>  

            <Link className="link" to="/AboutMe"> 
            <motion.button
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            whileTap={{ scale: 0.8 }}
            >

            About Me
            </motion.button>          
            </Link>

        </StyledButton>

            </StyledText>


            {/* <StyledImg>
                <motion.img 
             
         
                src={graduation} alt="graduation image"/>
            </StyledImg> */}

        </StyledTop>
    )
}


const StyledTop = styled.div`



min-height:80vh;
display:flex;
margin:auto;
padding-top:0.3rem;
background:url("https://images.pexels.com/photos/273238/pexels-photo-273238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260") no-repeat center center fixed;
background-size: cover;
height: 100%;
overflow: hidden;

`


const StyledText = styled.div`

width:50%;
padding-left:50%;

`



// const StyledImg = styled.div`
/* width:60%; */
/* 
img{

    width:100%;
    height:100%;
    object-fit:cover;
    
    
} */


// `


const StyledButton = styled.div`

.link{

color:white;
text-decoration:none;

}


button{

    background-color:#ad8164;
    color:white;
    display:flex;
    padding:20px;
    margin:30px;
    width:40%;
    font-family: Arial,Helvetica,sans-serif;
    font-size: 14px;
    box-shadow: 4px 4px 4px #999;
    text-align: center; 
    display:table-cell; 
    vertical-align:middle

}

/* button:hover{
    background-color:#83c5be;
} */

`


export default Top;
