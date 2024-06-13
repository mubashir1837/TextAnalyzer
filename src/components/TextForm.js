import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState(''); 

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}> 
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#c2bfb8':'#e3e2de', color: props.mode==='dark'?'black':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className={`btn mx-1 my-1 ${props.mode === 'dark' ? 'btn-light' : 'btn-dark'}`} onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className={`btn mx-1 my-1 ${props.mode === 'dark' ? 'btn-light' : 'btn-dark'}`} onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className={`btn mx-1 my-1 ${props.mode === 'dark' ? 'btn-light' : 'btn-dark'}`} onClick={handleClearClick}>Delete Text</button>
            <button disabled={text.length===0} className={`btn mx-1 my-1 ${props.mode === 'dark' ? 'btn-light' : 'btn-dark'}`} onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className={`btn mx-1 my-1 ${props.mode === 'dark' ? 'btn-light' : 'btn-dark'}`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
