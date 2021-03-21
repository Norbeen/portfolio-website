import React from 'react'
import Navigation from './Navigation';
import Footer from './Footer';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import {Route } from "react-router-dom";
import Achievement from './landingPage/Achievement';
import Project from './landingPage/Project';
import Skill from './landingPage/Skill';

const MainPage = () => {
    return (
        <div>
            
            <Navigation/>

           <Route exact path= "/" >
            <LandingPage/>
           </Route>


           <Route path="/AboutMe">
               <AboutMe/>
           </Route>


        <Route path ="/ContactMe">
            <ContactMe/>
        </Route>

        {/* path when user click the buttons  */}

        <Route path ="/Achievement">
            <Achievement/>
        </Route> 

        <Route path ="/Project">
            <Project/>
        </Route>

        <Route path ="/Skill">
            <Skill/>
        </Route>


            <Footer/>


        </div>
    )
}

export default MainPage
