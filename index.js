import React from "react"
import ReactDOM from "react-dom"

import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from './components/data'

import  "./index.css"


function Page() {
 const cardElement = data.map(data => {
  return(
   <Card 
    key={data.id}
    {...data}
    // passing all these in one line
    // image={data.coverImg}
    // rating={data.stats.rating}
    // reviewCount={data.stats.reviewCount}
    // country={data.location}
    // title={data.title}
    // price={data.price}
    // status={data.status}
    // openSpots={data.openSpots}
   />
  ) 
 })
 return(
  <div>
   <NavBar />
   <Hero />
   <div className="card-container">
   {cardElement}
   </div>
  </div>
 )
}



ReactDOM.render(<Page />, document.getElementById('root'))
