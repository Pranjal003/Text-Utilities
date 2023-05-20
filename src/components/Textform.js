import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick  = ()=>{
        // console.log("Upcase was clicked" + Text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to UPPERCASE","success")
    }
    const handleLowClick  = ()=>{
        // console.log("Lowcase was clicked" + Text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success")

    }
    const handleOnChange  = (event)=>{
        // console.log("On Change");
        setText(event.target.value);

    }
    const [text, setText] = useState('');

  return (
    <>
<div className="container mb-3" style={{color : props.mode==='dark'?'white':'black'}}>
  <label htmlFor="myBox" className="form-label"><h1 >{props.heading}</h1></label>
  <textarea className="form-control" value= {text} onChange= {handleOnChange} style={{background: props.mode==='dark'?'#A1A1A1':'white',color : props.mode==='dark'?'white':'black'}} placeholder='Enter you text here' id="myBox" rows="8"></textarea>
  <button disabled={text.length===0} className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
  <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleLowClick}>Convert to Lowercase</button>
</div>
<div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
    <h1>Your text Summary</h1>
    <p>
        <li> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words</li>
        <li> {text.length} characters</li>
        <li>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read </li>
    </p>
        <h3>Preview</h3>
    <p>
        {text.length>0?text:"Enter your text in the textbox above to preview."}
    </p>
</div>
</>
  )
}
