import { ReactComponent as BootstrapIcon } from "./../assets/bootstrap.svg";
import { ReactComponent as HtmlIcon } from "./../assets/html.svg";
import { ReactComponent as CssIcon } from "./../assets/css.svg";
import { ReactComponent as JsIcon } from "./../assets/javascript.svg";
import { ReactComponent as ReactIcon } from "./../assets/react.svg";
import { ReactComponent as MuiIcon } from "./../assets/material.svg";

// import { ReactComponent as BootstrapbgIcon } from "./../assets/bootstrap-bg.svg";
// import { ReactComponent as HtmlbgIcon } from "./../assets/html-bg.svg";
// import { ReactComponent as CssbgIcon } from "./../assets/css-bg.svg";
// import { ReactComponent as JsbgIcon } from "./../assets/javascript-bg.svg";
// import { ReactComponent as ReactbgIcon } from "./../assets/react-bg.svg";
// import { ReactComponent as MuibgIcon } from "./../assets/material-bg.svg";

import BootstrapbgIcon  from "./../assets/bootstrap-bg.svg";
import HtmlbgIcon  from "./../assets/html-bg.svg";
import CssbgIcon from "./../assets/css-bg.svg";
import JsbgIcon from "./../assets/javascript-bg.svg";
import  ReactbgIcon from "./../assets/react-bg.svg";
import MuibgIcon from "./../assets/material-bg.svg";




const data = [
  {
    name: "HTML",
    time: "10:00 am",
    svg: <HtmlIcon />,
    // bg: <HtmlbgIcon/>,
    bg:HtmlbgIcon ,
  },
  {
    name: "CSS",
    time: "11:15 am",
    svg: <CssIcon />,
    // bg: <CssbgIcon/>,
    bg:CssbgIcon ,
  },
  {
    name: "JavaScript",
    time: "13:00 pm",
    svg: <JsIcon />,
    // bg: <JsbgIcon/>,
    bg: JsbgIcon ,
  },
  {
    name: "React",
    time: "14:15 pm",
    svg: <ReactIcon />,
    // bg: <ReactbgIcon/>,
    bg:ReactbgIcon ,
  },
  {
    name: "Bootstrap",
    time: "16:15 pm",
    svg: <BootstrapIcon />,
    // bg: <BootstrapbgIcon/>,
    bg:BootstrapbgIcon ,
  },
  {
    name: "Material UI",
    time: "16:15 pm",
    svg: <MuiIcon />,
    // bg: <MuibgIcon/>,
    bg: MuibgIcon ,
  },
];

export default data;
