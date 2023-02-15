import { useState } from 'react'
import './../style/card.css'
// import { useRef, useEffect } from "react";
// import gsap from "gsap";

const Card = ({info:{name,time,svg,bg},timeline}) => {
  
  // let card_animation = useRef(null)

  // useEffect(()=> {
  //   let ctx = gsap.context(()=> {
  //     timeline.from(card_animation,{
  //       duration: .7,
  //       x: '-250%',
  //       ease: 'elastic'
  //     })
  //   })

  //   return () => ctx.revert()
  // })

  const [hover, setHover] = useState(false)
  return (
    <div onMouseOver={() =>setHover(true)} onMouseLeave={() =>setHover(false)} className='main-card' style={{backgroundImage: `url(${hover ? bg : ''})`}}>
        <div className="svg-card">
        {svg}
        </div>
        <div className='text-card'>
            <p>
            Lesson Name : {name}
            </p>
            <p>
            Lesson Hour : {time}
            </p>
        </div>
    </div>
  )
}

export default Card