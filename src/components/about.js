// import { useState } from "react"
import React , {useState} from 'react'

export default function About(prop) {

  document.title="TEXTutil -"+prop.aboutTitle

    // let mystyle={
         
    //     color:"white",
    //     backgroundColor:"black",
    //     border:"1px solid white"
    
    // }

    
    const [mystyle,setStyle]=useState({  // using the state 
        // the initital state is an object which contains css 
        
        color:"white",
        backgroundColor:"black",
        border:"1px solid white"
    })

    const [btnText,setBtnText]=useState("ENABLE LIGHT MODE") // using the state for button text 

    const mode=()=>{ // defining the mode funtion 
     if (mystyle.backgroundColor==="black"){
        setStyle({
            color:"black",
            backgroundColor:"white",
            border:"1px solid black"

        })
        setBtnText("ENABLE DARK MODE")

        
     }
     else{

        setStyle({
            color:"white",
            backgroundColor:"black",
            border:"1px solid white"

        })
        setBtnText("ENABLE LIGHT MODE")

     }
    }

  
  return (
    <div>
<div className="container my-100" >

<h2 className='m-3'>ABOUT US </h2>
<div class="accordion container my-100" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}> 
      {/* passing the myStyle object of state which contains css */}
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={mystyle}>
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample" style={mystyle}>
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample" style={mystyle}>
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
      
</div>
    <div className="container">
     <button className="btn btn-primary my-3 mx-3" onClick={mode}>{btnText}</button> 


    </div>


    </div>

  )
}
