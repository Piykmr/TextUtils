import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        if(text.length>0)
        {
        props.showAlert("Changed in uppercase","Success")
        }
    }
    const handleLowClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        if(text.length>0)
        {
        props.showAlert("Changed in lowercase","Success")
        }
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleClsClick = ()=>{
        let newText = "";
        setText(newText);
        if(text.length>0)
        {
        props.showAlert("TextBox is empty","Success")
        }
    }
    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        if(text.length>0)
        {
        props.showAlert("Extra space has been removed","Success")
        }
    }
    const [text,setText] = useState('Enter text here');
    //text="Enter text here";
    return (
        <>
            <div className="form-group" style={{color: props.mode==='dark'?'white':'black'}}>
                 <textarea className="form-control" id="exampleFormControlTextarea1" value={text} style={{backgroundcolor: props.mode==='dark'?'black':'white'}} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <div>
            <button type="button" onClick={handleUpClick} className="btn btn-secondary btn-lg mx-2">UpperCase</button>
            <button type="button" onClick={handleLowClick} className="btn btn-secondary btn-lg mx-2">LowerCase</button>
            <button type="button" onClick={handleClsClick} className="btn btn-danger btn-lg mx-2">Clear</button>
            <button type="button" onClick={handleExtraSpace} className="btn btn-Success btn-lg mx-2">Remove Extra Space</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <hr/>
                <h2>Your Text Preview</h2>
                <p>{text.length>0 ? text: 'Enter Text To Preview'}</p>
                <br/>
                <p>{text.length} characters and {text.split(" ").length} words</p>
            </div>
        </>
    )
}
