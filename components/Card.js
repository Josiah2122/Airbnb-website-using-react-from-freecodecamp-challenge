import React from "react"

export default function Card(props){
return(
   <div className="card">
   <img src={`./images/${props.coverImg}`} />
   { props.status &&<button>{props.status}</button>}
   <div className="rating"> <img src="./images/star.png" /> <p>{props.stats.rating} <span>({props.stats.reviewCount})<strong> ·</strong> {props.location}</span></p></div>
   <p>{props.title}</p>
   <p><strong>From ${props.price} </strong>/ person</p>
   </div>

)
}
