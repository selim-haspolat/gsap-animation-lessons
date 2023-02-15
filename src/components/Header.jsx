import "./../style/header.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const Header = ({timeline}) => {

  let headerG = useRef(null)
  
    useEffect(() => {
      let ctx = gsap.context(()=> {
        timeline.from(headerG,{
          duration: .3,
          y: '-100%',
        })
      })
  
      return () => ctx.revert()
    });

  return (
    <div>
      <header ref={el => headerG = el}>Lessons</header>
    </div>
  );
};

export default Header;
