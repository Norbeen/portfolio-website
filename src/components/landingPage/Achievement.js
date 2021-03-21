import React from 'react'
import styled from 'styled-components';


const Achievement = () => {
    return (
        <StyledAchievement>
            <h1>this is my achievement</h1>

            <li>
                my scholarship
            </li>
            <li>
                summa cum laude gpa - certificate
            </li>

            <li>
                numerous deans list
            </li>

            <li>
               attendeD google hackathon
            </li>

            <li>
                wrote my first book
            </li>
            
            <li>
                started kearing guitar and can play muscic now
            </li>

        </StyledAchievement>
    )
}


const StyledAchievement = styled.div`
max-height:80vh;
min-height:80vh;

`

export default Achievement
