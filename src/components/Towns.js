import React from 'react'
 export default function Towns(props){
    return(
        <div>
            {props.town.map((ele,index)=>{
                {return(
                    <div className='town' id={`town${index+1}`} style={{display:props.style,background:'orange'}}>
                        {ele.name}
                    </div>
                )}
            })}
        </div>
    )
 }