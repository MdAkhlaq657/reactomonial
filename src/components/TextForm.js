import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log(" Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }
    const handleClearClick = () => {
        let newText = ('');
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    const speak = () => {
      let newText = new SpeechSynthesisUtterance();
      newText.text = text;
      window.speechSynthesis.speak(newText);
      props.showAlert("Listen Carefully!", "success");
    }
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ] + /);
      setText(newText.join(" "))
      props.showAlert("Extra spaces removed!", "success");
    }

    const handleCopy = () => {
      let newText = document.getElementById("myBox");
      newText.select();
      navigator.clipboard.writeText(newText.value);
      props.showAlert("Copied to Clipboard!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("on Change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    // text = "new text"; // Wrong way to change the state 
    // setText("new text"); // Correct way to change the state 
  return (
    <>
    <div className='container'  style={{color: props.mode === 'dark'?'white': 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'?'grey': 'white', color: props.mode === 'dark'?'white': 'black' }} value={text} onChange = {handleOnChange} id="myBox" rows="9"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick = {handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick = {handleLowClick} >Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick = {handleClearClick} >Clear Text</button>
            <button className="btn btn-primary mx-1" onClick = {speak} >Speak Text</button>
            <button className="btn btn-primary mx-1" onClick = {handleCopy} >Copy Text</button>
            <button className="btn btn-primary mx-1" onClick = {handleExtraSpaces} >Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white': 'black'}} >
      <h1>Your text summary</h1>
      <p> {text.split(' ').length} words and {text.length} characters</p>
      <p> { 0.005 * text.split(' ').length } Minutes read </p>

      <h2>Preview</h2>
      <p> {text.length>0?text:"Enter something in the textbox above to preview it here"} </p>
    </div>
    </>
  )
}
