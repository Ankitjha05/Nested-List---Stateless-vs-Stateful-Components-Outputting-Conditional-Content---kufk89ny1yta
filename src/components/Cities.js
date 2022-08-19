import React,{useState} from 'react'
import Towns from './Towns';

export default function Cities(props) {
  return (
    <div>
      {props.cities.map((ele,index)=>{
        {
            const [style, setStyle] = useState({
                display: "block",
              });
    
              const changeStyle = () => {
                if (style.display === "block") {
                  setStyle({
                    display: "none",
                  });
                } else {
                  setStyle({
                    display: "block",
                  });
                }
              };
            return(
                <>
                    <div key={ele.name} id={`city${index+1}`} onClick={changeStyle} style={{display:props.style,background:"lightgreen"}}>
                        {ele.name}
                    <Towns style={style.display} town={ele.towns}/>
                    </div>
                </>
            )
        }
      })}
    </div>
  )
}
