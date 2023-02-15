import "./../style/footer.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const Footer = ({ timeline }) => {
  let footer = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(()=> {
      timeline.from(footer, {
        duration: .3,
        y: 100,
      },0);
    })

    return () => ctx.revert()
  });

  return (
    <div className="footer-div grow">
      <footer ref={(el) => (footer = el)}>
        © 2023 Selim. All rights reserved.
      </footer>
    </div>
  );
};

export default Footer;
