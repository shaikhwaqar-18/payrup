import React from 'react'
import Button from 'react-bootstrap/Button';

function Midcontent(props) {
  return (
    <div>
        <div className='main_midcontent'>
       
        <div className='d-flex'>

            <span>
                <img src={props.poster} ></img>
            </span>
            
            
            <div className='mx-2 mt-4'>
            <span style={{color: "blue"}}>{props.head1}</span> 
            <span  style={{color: "orange", fontWeight: "900", marginRight: "5px", marginLeft: "5px"}}>|</span>
            <span style={{color: "blue"}}>{props.head2}</span>
            <h1 style={{ fontSize: "24px", display: "block"}}>{props.heading}</h1>
            <span>{props.para}</span>
            <div>{props.Date}</div>
            <Button variant="primary">{props.button}</Button>
            </div>
            </div>
          </div>

    </div>
  )
}

export default Midcontent
