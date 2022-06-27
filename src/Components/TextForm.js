import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleup = () => {
        console.log("you have clicked button");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("Converted to upper case", "success")
    }
    const handlelow = () => {
        console.log("you have clicked button");
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("Converted to lower case", "success")
    }
    const printtext = () => {
        console.log("you have initiated printing");
        return window.print();
    }

    const intoTitleCase = () => {
        let newText = text.split(" ").map((currentValue) => {
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;

        });
        setText(newText.join(" "));
        props.showalert("Converted to Title case", "success")
    }
    // const intosentCase = () => {
    //     let newText = text.split(".").map((currentValue) => {
    //         let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
    //         return newText;
    //     });
    //     setText(newText.join("."));
    // }
    const getnum = () => {
        let num = /[0-9]/g;
        let newText = text.match(num);
        setText(newText.join(""));

    }
    const copyText = () => {
        let text = document.getElementById("mytextbox");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showalert("text copied", "success")
    }
    const clear = () => {
        setText("");
        props.showalert("all cleared", "success")

    }
    const spacehandle = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showalert("spaces are handled", "success")
    }
    // const printText = ()=>{
    //     let newText = document.getElementById("mytextbox");
    //     newText.print(); 
    // }
    const speak = () => {
        console.log("speaking started")
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showalert("speaking started", "success")
    }

    const handelonchange = (event) => {
        console.log("text started to change");
        setText(event.target.value);
    }
    return (
        <>
            <div className={`container text-${props.mode === "light" ? "dark" : "light"}`}>
                <div>
                    <h1 className="my-3">{props.heading}</h1>
                    <div className="mb-3">
                        <textarea className="form-control" style={{ color: props.mode === "dark" ? "white" : "black" }} value={text} onChange={handelonchange} placeholder="Leave a comment here" id="mytextbox" rows="8"></textarea>
                    </div>
                    <button type="button" onClick={handleup} className="btn my-2 mx-2 btn-primary btn-primary">convert to uppercase</button>
                    <button type="button" onClick={handlelow} className="btn my-2 mx-2 btn-primary">convert to lowercase</button>
                    <button type="button" onClick={printtext} className="btn my-2 mx-2 btn-primary">print this screenshot</button>
                    <button type="button" onClick={speak} className="btn my-2 mx-2 btn-primary">speak text</button>
                    <button type="button" onClick={intoTitleCase} className="btn my-2 mx-2 btn-primary">Title case</button>
                    <button type="button" onClick={getnum} className="btn my-2 mx-2 btn-primary">getnum</button>
                    <button type="button" onClick={clear} className="btn my-2 mx-2 btn-primary">clear</button>
                    <button type="button" onClick={copyText} className="btn my-2 mx-2 btn-primary">copyText</button>
                    <button type="button" onClick={spacehandle} className="btn my-2 mx-2 btn-primary">spacehandle</button>

                </div>
                <div className="container">
                    <h2>your text summary</h2>
                    <p>{text.split(' ').length} words and {text.length} charactors.</p>
                </div>
                <div className="container">
                    <h2>time taken for reading this</h2>
                    <p>{0.25 * text.split(' ').length} seconds or {0.0042 * text.split(' ').length} minutes</p>
                </div>
                <div className="container">
                    <h2>Privew</h2>
                    <p>{text}</p>
                </div>
            </div>

        </>
    )
}
