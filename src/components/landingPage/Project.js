import React from 'react';
import styled from 'styled-components';




const Project = () => {



    return (
        <StyledProject>
      

{/* first project  */}

               <StyledProjects> 

                <a href="https://github.com/Norbeen/ReactApp-BearBytes">

                    <h2> Bear Bites </h2> 
                </a>
            
             
               <p> <b>Bear Bites is a full stack web application we as a team build to:</b>  </p> 
          
               <li>target the students, so they get informed about food available in university</li>
               <li>students can rate, review the food so it would be ranked</li>
               <li>we would also send email to students signing up with the food being served</li>
         
               </StyledProjects>


               <br/>

{/* second project */}
                <StyledProjects>
                   <a href="https://github.com/Norbeen/AndroidApp-FoodBuddy">

                        <h2> Food Buddy </h2> 
                   </a>
                  
            
        
            <p> <b>Food Buddy is an android application we as a team build to: </b> </p> 
            <li>target the students, so they get informed about food available in university</li>
            <li>students can rate, review the food so it would be ranked</li>
            <li>we would also send email to students signing up with the food being served</li>
             
                </StyledProjects>

            <br/>

{/* third project */}
            <StyledProjects>
                <a href="https://github.com/Norbeen/ReactFlask-ChatApp">

                    <h2> Jarvis Chat Application </h2> 
                </a>
                
            
          
            <p> <b> Jarvis Chat Application is an android application</b>  </p> 
            <li>target the students, so they get informed about food available in university</li>
            <li>students can rate, review the food so it would be ranked</li>
            <li>we would also send email to students signing up with the food being served</li>
          
                </StyledProjects>

 <br/>

{/* fourth project */}

            <StyledProjects>
                <a href="https://github.com/Norbeen/Flask-RecipeApp">
                    <h2> Recipe Finder </h2> 
                </a>
                
            
            
            <p> <b> Recipe Finder is a full stack web application </b> </p> 
            <li>target the students, so they get informed about food available in university</li>
            <li>students can rate, review the food so it would be ranked</li>
            <li>we would also send email to students signing up with the food being served</li>
            
            </StyledProjects>

 <br/>

{/* fifth project */}
        <StyledProjects>
                <a href="https://github.com/Norbeen/JavaGUI-Java">
                    <h2> Chat Censor App </h2> 
                </a>
           
            
            
            <p> <b>Chat Censor App is a java GUI based application build to: </b> </p> 
            <li>target the students, so they get informed about food available in university</li>
            <li>students can rate, review the food so it would be ranked</li>
            <li>we would also send email to students signing up with the food being served</li>
           
            </StyledProjects>



     
        </StyledProject>
    )
}


const StyledProject = styled.div`

min-height:80vh;
text-align:center;
display:flex;
flex-wrap:wrap;
background-image:url("https://images.pexels.com/photos/3236265/pexels-photo-3236265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
background-size: cover;
height: 100%;
overflow: hidden;
`

const StyledProjects = styled.div`
/* border:solid black 2px; */
border-radius:15%;
margin:10px;
box-shadow: 10px 5px 5px black;
opacity:0.9;


a, p, li{
    text-decoration:none;
    color:white;
    
}


`


export default Project
