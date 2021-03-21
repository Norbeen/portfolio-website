import React from 'react'
import styled from 'styled-components';
import AboutMe from './AboutMe';
import Contact from './ContactMe';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Navigation = () => {




    return ( 

       
        <StyledNav>
            <nav>
           
            <h1 >
            <Link className="link" to="/"> Nabin Baral</Link>
            </h1>
            
          
            
            <ul>
                <li>
                <Link className="link" to="/AboutMe"> About Me </Link>
                </li>


                <li>

                <Link className="link" to="/ContactMe">  Contact </Link>
                
                </li>
            </ul>

            </nav>
            </StyledNav>
 
    )
}



const StyledNav = styled.div`
color:white;
min-height:10vh;
padding-left:1%;
padding-right:1%;

nav {
    display: flex;
    justify-content: space-between;
   
    h1{
        font-family: 'Berkshire Swash', cursive;
        

    }

    li{
        font-family: 'Nunito Sans', sans-serif;
        
    }

  
}


ul {
    display:flex;
    justify-content:space-between;
    width:20%; 
    list-style:none;
    
   
}


.link{

    color:white;
    text-decoration:none;
  
}


background-color:#073b4c;


`


export default Navigation;

