import React, {useState} from 'react' // importing useState hooks


export default function TextForm(props) {
    const handleUPCclick = () =>{
        console.log("UPPERCASE button was clicked and textBox contains: " + text);
        let newText = text.toUpperCase();
        setText(newText); // correct way to change the state
        props.showAlert("Converted to UPPERCASE", "Success")
    }
    
    const handleLOCclick = () =>{
        console.log("lowercase button was clicked and textBox contains: " + text);
        let newText = text.toLowerCase();
        setText(newText); // correct way to change the state
        props.showAlert("Converted to lowercase", "Success")
    }

    const handleTitleCaseClick = () =>{
        console.log("Title case button was clicked and textBox contains: " + text);
        let newText = text.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
        setText(newText); // correct way to change the state
        props.showAlert("Converted to Title Case", "Success")
    }
    
    const handleClearClick = () =>{
        console.log("text cleared");
        let newText = '';
        setText(newText); // correct way to change the state
        props.showAlert("Text cleared", "Success")
    }
    
    const handleCopy = () => {
        /* old method */
        // var text = document.getElementById("myBox");
        // text.select(); // selects the text
        // navigator.clipboard.writeText(text.value); // copies the text to clipboard
        // document.getSelection().removeAllRanges(); // deselects the copied text

        /* navigator api can directly copy to clipboard */
        navigator.clipboard.writeText(text); // copies the text to clipboard
        console.log("Text copied...");
        props.showAlert("Text copied to clipboard", "Success")
    }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        console.log("Extra spaces deleted.");
        props.showAlert("Extra spaces removed", "Success")
    }
    
    const handleOnChange = (event) =>{
        console.log("On change");
        setText(event.target.value); // allows to change the text box data i.e. add to remove new values
        props.showAlert("Your text is changing", "Warning")
    }

    const [text, setText] = useState('');
    // text = "new text"; // wrong way to change the state
    // setText("new text"); // correct way to change the state //////showing errors: 'Too many re-renders'
    return (
        <>
        <div style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#ffffff25', color: props.mode==='dark'?'white':'black'}} rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUPCclick}>Convert to UPPERCASE</button>  
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLOCclick}>Convert to lowercase</button>  
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleTitleCaseClick}>Convert to TitleCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear text</button>  
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy text</button>  
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>  
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(/\s+/).filter((element) => {return element.length!==0}).length} minutes read</p>
            <h3>Preview: </h3>
            <p>{text.length > 0 ? text : "Enter some text in the text box above to preview it here!"}</p>
        </div>
        </>
    )
}
