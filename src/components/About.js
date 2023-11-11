    
import React from 'react'

    export default function About(props) {
        // const [myStyle,setMyStyle]=useState({ color:'black',
        // backgroundColor:'white'

        // });

        

let myStyle=
{

color:props.mode==='dark'?'white':'black',

backgroundColor:props.mode==='dark'?'black':'white',





}










        
    return (


<>

        <div className='container' style={myStyle}>
            <h2 className='my-3'>About Us</h2>
        <div className="accordion" id="accordionExample">
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      
 <strong>analyze Your Text</strong>


        </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
Textutils give you a way to analyze your text quickly and efficently. Be it your count , character count or 
        </div>
        </div>
    </div>
    <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong>
        </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        Textutils give you a way to analyze your text quickly and efficently. Be it your count , character count or 
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
           <strong> Browse Compatible</strong> 
        </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
        Textutils give you a way to analyze your text quickly and efficently. Be it your count , character count or 
        </div>
        </div>
    </div>

    </div>




        </div>
        </>
    )
    }
