import React from 'react'

function Alert(prop) {
  
  setTimeout(() => {

    
 

  }, 1000);
  return (

      <div id='p2' style={{height : "1vw",display:"none",position:"static"}}> 
      
            <div className="alert alert-warning alert-dismissible fade show"  role="alert">
               {/* {prop.alert} */}
              <strong>{prop.alert}</strong>
               
            </div>
      </div>


      
    )
}

export default Alert
