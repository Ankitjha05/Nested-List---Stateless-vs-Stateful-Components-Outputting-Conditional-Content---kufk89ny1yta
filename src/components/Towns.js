import React from 'react'
 export default function Towns(props){
    return(
        <div>
            {props.town.map((ele,index)=>{
                {return(
                    <div id={`town${index}`} style={{display:props.style,background:'orange'}}>
                        {ele.name}
                    </div>
                )}
            })}
        </div>
    )
 }