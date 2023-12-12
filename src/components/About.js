// import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const [btnText, setBtnText] = useState("Enable dark mode");

    // const toggleStyle = () => {
    //     if(myStyle.color === 'white'){
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable dark mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: "1px solid white"
    //         })
    //         setBtnText("Enable light mode");
    //     }
    // }

    let myStyle = {
        color: 'black',
        backgroundColor: 'white',
        // backgroundImage: ''    ///////////not fixed
        // backgroundImage: "url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e')"
    }

    if(props.mode === 'light'){
        myStyle.color = 'black';
        myStyle.backgroundColor = 'white';
        // myStyle.backgroundImage = "url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e')"
    }
    else{
        myStyle.color = 'white';
        myStyle.backgroundColor = '#ffffff10';
        // myStyle.backgroundImage = "url('data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='white'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e')"
    }

    return (
        <div>
            <div className="container" style={props.mode === 'light' ? {color: 'black', backgroundColor: 'white'} : {color: 'white', backgroundColor: 'transparent'}}>
                <h1 className="my-3">About Us</h1>
                <div className="accordion" id="accordionExample" style={myStyle}>
                    <div className="accordion-item" style={{backgroundColor: 'transparent'}}>
                        <h2 className="accordion-header" style={{backgroundColor: 'transparent'}}>
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your text </strong>
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count, changing text to UPPERCASE or lowercase, even coping the text to clipboard or even removing extra spaces.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={{backgroundColor: 'transparent'}}>
                        <h2 className="accordion-header" style={{backgroundColor: 'transparent'}}>
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use </strong>
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={{backgroundColor: 'transparent'}}>
                        <h2 className="accordion-header" style={{backgroundColor: 'transparent'}}>
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="container my-3">
                    <button onClick={toggleStyle} type="button" className="btn btn-primary my-2">{btnText}</button>
                </div> */}
            </div>
        </div>
    )
}
