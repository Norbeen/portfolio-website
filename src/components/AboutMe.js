import React from 'react'
import Navigation from './Navigation';
import Footer from './Footer'
import styled from 'styled-components';
import aboutMe from '../img/about-me.jpg';
import {motion} from 'framer-motion';

const AboutMe = () => {

    return (
        <StyledAboutme >
 

       <h1>Hi there,</h1>

       <ul>

           <li>I am an international student. I came to usa in 2016 to pursue degree in computer science</li>
            <li>I graduated in Dec,2020. I am interested in software engineering and web development</li>
            <li>I  <a href ="http://norbeenbaral.blogspot.com"> love writing blog </a> 
     
            </li>

            <li>I  <a href ="http://youtube.com/nabinbaral"> love playing guitar </a> which I learned after I came to usa.
       
            </li>

            <li>My dream companies are: twitter, google, ibm and oracle but I am open to any companies and do my  best to contribute best as I can</li>
            <li>Check out my  <a href ="https://www.linkedin.com/in/nabin-baral-05922ba2"> Linkedin  </a>   as well 

       
          
            </li>
       </ul>

     
        </StyledAboutme>
    )
}

const StyledAboutme = styled.div`

min-height:80vh;
max-height:80vh;
font-family: 'Gothic A1', sans-serif;
font-size:20px;
font-weight:bold;
background-image: url("https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
background-size: cover;
height: 100%;
overflow: hidden;
 

h1{
    text-align:center;
    margin-top:20px;
    margin-left:2%;
    padding:15px;
    border:solid #7f5539 2px ;
    width:40%;
    background-color:#cdb19f;
    border-radius:10px;
    color:#0a0908;
    opacity:0.88;
 
} 


 li{
    list-style:none;
    padding:20px;
    border:solid #7f5539 2px ;
    width:45%;
    background-color:#cdb19f;
    border-radius:10px;
    margin:10px;
    color:#0a0908;
    opacity:0.88;
    margin-left:50%;
 }

a{
    text-decoration:none;
    color:#fbfbed;
    font-weight:bold;
}

`

export default AboutMe
