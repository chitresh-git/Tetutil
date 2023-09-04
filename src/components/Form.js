// this file is an demo single page application 
import React, { useState } from 'react';


export default function Form(prop) {

    const [text, setText] = useState("ENTER HERE"); // using the hooks 
    // text is variable and its initial value is "enter your text here "
    // where as setText is used to update the value of text 

    document.title = prop.formTitle

    const alerVisible = () => {
        document.getElementById("p2").style.display = "block";
    }

    const upper = () => {

        let newText = text.toUpperCase() // this will change the string into uppercase
        setText(newText)  // setText will updates the value of text
        alerVisible()
        prop.alert("TEXT IS CONVERTED INTO UPPER CASE")

    }
    const lower = () => {

        let newText = text.toLowerCase() // this will change the string into uppercase
        setText(newText)  // setText will updates the value of text 
        alerVisible();
        prop.alert("TEXT IS CONVERTED INTO LOWER CASE")

    }

    const removeSpaces = () => {

        let newText = text.replace(/\s/g, "")
        console.log(newText)
        setText(newText)
        alerVisible()
        prop.alert("ALL SPACES IS REMOVED")

    }


    const replace = () => {
      
        document.getElementById("replace").style.display = "block";


    }


    const handleOnChange = (event) => { // when we states we have to use onchange event listner 

        setText(event.target.value)

    }
    var first
    const toreplace = (event) => {
        first = event.target.value
    }
    var second
    const toreplace2 = (event) => {
        second = event.target.value
    }

    const replaced = () => {
        let t = text.replace(first, second)
        setText(t)
 
        document.getElementById("replace").style.display = "none";
    }





    return (

        <div>
            <div className="mb-10 my-5">
                <label for="exampleFormControlTextarea1" className="form-label">INPUT DATA </label>



                


                <textarea className="form-control" value={text} style={{ backgroundColor: prop.mode === "light" ? "white" : "grey", color: prop.mode === "light" ? "black" : "white" }} id="exampleFormControlTextarea1" onChange={handleOnChange} rows="6"></textarea>
                {/* vaue ={text} where the text is variable whose state can be change using the setText  */}





                <button disabled={text.length === 0} className="btn btn-primary m-3" onClick={upper}>UPPER</button>
                {/* when the user clicks on the button it will invoke the handle funtion  */}

                <button disabled={text.length === 0} className="btn btn-primary m-3" onClick={lower}>LOWER</button>

                <button disabled={text.length === 0} className="btn btn-primary m-3" onClick={removeSpaces}>REMOVE ALL SPACES</button>

                <button disabled={text.length === 0} className="btn btn-primary m-3" onClick={replace}>REPLACE WORD</button>

                <div id="replace" className="container" style={{ display: "none" }}>


                    <input className="form-control m-2" type="text" placeholder="Type something..." onChange={toreplace} id="replace1" />
                    <input className="form-control m-2" type="text" placeholder="Type something..." onChange={toreplace2} id="replace1" />
                    <button className="btn btn-primary m-3"  onClick={replaced}>REPLACED</button>

                </div>
            </div>


            <h2 className='my-4'>NUMBER OF WORDS AND CHARACTER</h2>
            {/* <h6 className='my-4'>TOTAL NUMBER OF WORDS = {text.split(" ").length} </h6>  */}
            {/* this will count the total number of words  */}

            <h6 className='my-4'>TOTAL NUMBER OF WORDS = {text.split(/\s+/).filter((element) => { return element.length != 0 }).length} </h6> {/* if the text contains only one space then the total number of words will be shown 0 */}
            {/* 
                text.split(" ") splits the text using " " space as a seperator but it creates a bug , when user enters a new word in the next line 
                it doesnt count that word 
                so we have to use text.split(/\s+/) so that word of new line will also be counted */}


            <h6 className='my-4'> TOTAL NUMBER OF CHARACTERS= {text.length}</h6>

            <h2 className='my-4' >PREVIEW</h2>
            <h6 className='my-4' >{text.length > 0 ? text : "ENTER SOMETHING "}</h6>
            {/* <h3>{text.replace(/\s/g,"")}</h3> */}

            <h3>{text.split(" ").join(" ")}</h3>

        </div>


    )

}