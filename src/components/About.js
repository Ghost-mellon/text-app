import React,{useState} from 'react'

export default function About(props) {

    const [myStyle, setMyStyle] = useState({
        color:'black',
        backgroundColor: "white"})

    const [btntext, setBtnText] = useState("Enable Dark Mode") // THIS IS FOR THE BUTTON TEXT CHANGE 


        // BUTTON DARK MODE CODE BUTTON ON BOTTOM LEFT CORNER
        const toggleStyle = ()=>{

            if(myStyle.color === 'white'){

             setMyStyle({
                 color: 'black',
                 backgroundColor: 'white',
             })  

             setBtnText("Enable Dark Mode")

            } else {
                setMyStyle({
                    color: 'white',
                    backgroundColor: 'black'
                })

                setBtnText("Enable Light Mode")
            }
        }

        const handleClickOne = () =>{
            props.showAlert("Button One Has been pressed", "success"); /* IMPORTANT TO PUT props. TO WORK */
        }
        const handleClickTwo = () =>{
            props.showAlert("Button Two Has been pressed", "success"); 
        }
        const handleClickThree = () =>{
            props.showAlert("Button Three Has been pressed", "success"); 
        }

  return (
    <div className='container' /*style={myStyle}*/ style={{backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'grey'}} >
        <h2 className='my-3'>About Us</h2>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" onClick={handleClickOne}/*style={myStyle}*/  style={{backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode ==='dark'?'#3ad23d':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                   Godfather TimeLine App
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div /*style={myStyle}*/ style={{backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode ==='dark'?'white':'black'}} className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate class that we use to style each element. These class control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" onClick={handleClickTwo} /*style={myStyle}*/ style={{backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode ==='dark'?'#3ad23d':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    GodFather Messenger App
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div /*style={myStyle}*/ style={{backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode ==='dark'?'white':'grey'}} className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate class that we use to style each element. These class control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" onClick={handleClickThree} /*style={myStyle}*/ style={{backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode ==='dark'?'#3ad23d':'grey'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    JukeBox Music Player App
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div /*style={myStyle}*/ style={{backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode ==='dark'?'white':'grey'}} className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate class that we use to style each element. These class control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>

      <div className="container">
        <button onClick={toggleStyle} type="button" className="btn btn-primary my-3">{btntext}</button>
      </div>
    </div>
  )
}
