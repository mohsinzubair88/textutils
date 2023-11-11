import React,{useState} from 'react'

export default function TextForm(props) {




















const handleUpClick=()=>{
  // console.log("Upper Case was Clicked"+text);
  let newText=text.toUpperCase();
  // setText("You have clicked on upper the click")
  setText(newText);
props.showAlert('Converted to Upper Case','success')

}

const handleLoClick=()=>{
  let newText=text.toLowerCase();
  setText(newText);

  props.showAlert('Converted to Lower Case','success')



}



const handleClear=()=>{
  let newText="";
  setText(newText)
  props.showAlert('Coverted to text clear','success')
}







const handleOnChange=(event)=>{
  // console.log("On Change");
  setText(event.target.value);
}

const [text, setText] =useState("Enter the text here2");

  return (
    <>
    <div>
      
  <div className="mb-3">
    <h1  className="my-2"style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
    
    <textarea  className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'white':'light'}}
     id="myBox" rows="8"></textarea>
   
  </div>
 <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Upper Case</button>
 <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lower Case</button>

 <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear Text</button>

<div className='container my-3'style={{color:props.mode==='dark'?'white':'black'}}>

  
<h2>Your Text Summary</h2>



<p> {text.split(" ").filter((element)=>{return element.length!==0}).length}    words and characters</p>

<p>{0.08*text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>

<h2>Preview</h2>

<p>{text.length >0 ? text:"Nothing to preview "}</p>





</div>


    </div>
    </>
      )
}












