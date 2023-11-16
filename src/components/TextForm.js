import React, { useState } from 'react'

export default function TextForm(props) {
                                            // IMPORTANT TO IMPORT {use state}
    const[text, setText] = useState("");   //##### useState is related to using to change state of text or enable dark mode code
    // const[revText, setRevText] = useState();

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const handleUpClick = ()=>{
        console.log("Uper Case Clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleEmailClick = () =>{
        let newText = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
        setText(newText)
    }

    // const handleClearClick = () =>{

    // }

    // const handleRevClick = ()=>{
    //     let revText = text.length();
    //     console.log(revText);
    //     setText(revText)

    // }



  return (
     <>

            <div className="container" style={{backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode ==='dark'?'white':'black'}}>

            <h2 className='my-3'>{props.heading}</h2>

            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">{props.textInfo}</label>
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} 
                rows="8" placeholder='Enter Text Here' style={{backgroundColor: props.mode==='dark'?'#212529':'white', 
                color: props.mode ==='dark'?'white':'black'}}></textarea>
                
            </div>

            <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Upper Case</button>
            <button className="btn btn-success mx-2" onClick={handleLowClick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-2" onClick={handleEmailClick}>Email</button>
            <button className="btn btn-success mx-2 my-2" onClick={() => setText(() => "")}>Clear</button>
            </div>

            <div className='container my-3' style={{color: props.mode ==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p> {text.split(" ").length} words and {text.length} characters </p>
                <p> {0.008 * text.split(" ").length} Minutes Read </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter somethin here to preview"}</p>
            </div>

     </>  
    )
}
