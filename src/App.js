import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import gsap from 'gsap'
import {useRef,useEffect} from 'react'

function App() {

  let page = useRef(null)

  let timeline = gsap.timeline() 

  useEffect(() => {
    let ctx = gsap.context(()=> {
      timeline.from(page,{
        duration:1,
        backgroundColor:'rgb(0,0,0,0)',
      })
    })

    return () => ctx.revert()
  });

  return (
    <div id="page" ref={el => page = el} className="flex flex-col justify-between min-h-[100vh] bg-[#161b22e8] overflow-hidden">
      <Header timeline={timeline}/>
      <Main timeline={timeline}/>
      <Footer timeline={timeline}/>
    </div>
  );
}

export default App;
