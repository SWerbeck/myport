import {React, } from "react";
import LAST from "../elements/LAST.gif"
import LIMIT from "../elements/LIMIT.gif"




const Projects = () => {
    
return(
    /**/
<div>  
   {/*limit planning*/}
    <div>
    <div>
        LIMIT PLANNING
    </div>
    <div><img src={LIMIT}/></div>
    <div>
        Limit is a financial planning app that allows users to get a projected 
        balance, on their banking account, on any given date, by inputing normal monthly expenses and earnings.
    </div>
    <div>
        Lesson learned: 
    </div>
    </div>
       {/*LAST coffee*/}
       <div>
    <div>
        L.A.S.T. Coffee
    </div>
    <div>
        <img src={LAST}/>
    </div>
    <div>
        An e-commerce website selling coffee and coffee related products. This was the first group projoject app I ever built. 
        Three out of the four memebers on the team (myself included) do not drink or know anything about coffee. As where this could be viewed as quite a 
        poor choice of prodcts to make an e-commerce site for, I view it as a great experience learning to communicate not just the technical issues within the group
        but also the non-tech concepts that need to be implemented into the project. 
    </div>
    <div>
        Lesson learned: "Never assume you know anything to be 100% certain". We ran into a bug that was taking a long time to figure out.
        One memeber of the team suggested we try changing a specific element to see if it would make a difference. The idea was shot down 
        based off of something we
    </div>
    </div>

       {/*timely manner*/}
       <div>
    <div>
        Timely Manner
    </div>
    <div>
        A timer application that can be used as a stopwatch to count up or a timer to count down.
         With the added function of being able to set a time interval alert for any time frame down to the second.
    </div>
    <div>
        Lesson learned: 
    </div>
    </div>



</div>

)}

export default Projects