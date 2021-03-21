import React from 'react'
import Navigation from './Navigation';
import Footer from './Footer'
import styled from 'styled-components';

const AboutMe = () => {
    return (
        <StyledAboutme>
       <h1>About page</h1>

       <ul>

           <li>I am an internation student, I came to usa in 2016 to pursue computer science degree</li>
            <li>I graduated in dec,2020. I am interested in software engineering</li>
            <li>I love wriginh blogs, you can check out theh 
                
               
                <a href ="http://norbeenbaral.blogspot.com"> here
                </a>


            </li>

            <li>I like playing guitar, which I learned after I came to usa. Check it out 
                
            <a href ="http://youtube.com/nabinbaral">
                here 

                </a>


            </li>

            <li>My dream companies are: twitter, google, ibm and oracle but I am open to any companies and do my  best to contribute best as I can</li>
        <li>Chek out my linked in as weel 
        <a href ="http://linkedin.com/nabinbral">
                here 

                </a>
            
            </li>
       </ul>
        </StyledAboutme>
    )
}

const StyledAboutme = styled.div`

min-height:80vh;
max-height:80vh;

`

export default AboutMe
