import React from 'react';
import Logo from "../../asset/logo/logo_super_mini.png";
import style from "./Menu.module.css";
import Link from 'gatsby-link';

// - home 
//     - portfolio
//     - blog
//         // learn how to build a blog with react 
//         // join our newsletter at end of articles 
//     - prestations
//         // 
//     - about us 
//     - contact


export default (props) => {
  return (
    <div className={style.menu}>
        {/* <div> Current link </div> */}
        <div className={style.menu__container}>
          <div className={style.menu__dropdown}> Menu </div>
          <div className={style.menu__content}>
            <Link /* className={style.link} */ to="/portfolio/">Portfolio {props.portfolio}</Link>
            <Link to="/blog/">Blog {props.blog}</Link>
            <Link to="/prestations/">Prestations {props.prestations}</Link>
            <Link to="/aboutus/">About us {props.aboutus}</Link>
            <Link to="/contact/">Contact {props.contact}</Link> 
          </div>
       </div>
    </div>
  )
}
