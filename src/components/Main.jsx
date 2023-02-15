import Card from "./Card";
import data from "./Data";
import './../style/main.css'
import { useRef, useEffect } from "react";
import gsap from "gsap";

const Main = ({timeline}) => {
  
  let lesson = useRef(null)
  
    useEffect(() => {
      let ctx = gsap.context(()=> {
        timeline.from(lesson,{
          duration: 1,
          ease: 'elastic',
          x: '-100%',
        },.7)
      })
  
      return () => ctx.revert()
    });


  return (
    <div ref={el => lesson = el} id="card-group-main">
      {data.map((info) => (
        <Card info={info}/>
      ))}
    </div>
  );
};

export default Main;
