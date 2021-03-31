import React from 'react'
import Navigation from './Navigation';
import Footer from './Footer'
import styled from 'styled-components';
import aboutMe from '../img/about-me.jpg';


const AboutMe = () => {

    return (
        <StyledAboutme>
       

       <h1>Hi there,</h1>

       <ul>

           <li>I am an international student. I came to usa in 2016 to pursue degree in computer science</li>
            <li>I graduated in Dec,2020. I am interested in software engineering and web development</li>
            <li>I  <b> love writing blogs,  </b> you can check it out 
                
               
                <a href ="http://norbeenbaral.blogspot.com"> here
                </a>


            </li>

            <li>I  <b> like playing guitar, </b>  which I learned after I came to usa. Check it out 
                
            <a href ="http://youtube.com/nabinbaral"> here </a>


            </li>

            <li>My dream companies are: twitter, google, ibm and oracle but I am open to any companies and do my  best to contribute best as I can</li>
            <li>Check out my <b> linkedin profile </b>    as well 

        <a href ="https://www.linkedin.com/in/nabin-baral-05922ba2"> here  </a>
          
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




 li{
    list-style:none;
    padding:10px;
 }
b {
    text-decoration:underline;
}

`

export default AboutMe
