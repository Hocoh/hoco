import Logo from "../../asset/logo/logo_mini.png";
import Link from 'gatsby-link';
import style from  "./Logo.module.css";
import React from 'react'

export default () => {
  return (
    <div>
      <Link to="/"> 
      <img className={style.logo}  src={Logo} alt=""/>
      </Link>
    </div>
  )
}
