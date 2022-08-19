import React from 'react'
 export default function Towns(props){
    return(
        <div>
            {props.town.map((ele,index)=>{
                {return(
                    <div id={`town${index}`} style={{display:props.style}}>
                        {ele.name}
                    </div>
                )}
            })}
        </div>
    )
 }