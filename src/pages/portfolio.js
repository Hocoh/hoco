import React from 'react'
import Link from 'gatsby-link'
import style from "./page__css/portfolio.module.css"; 
import workshop from "../asset/portfolio.jpg";
const SecondPage = () => (
  <div>

    <img src={workshop} 
    alt="portfolio__workshop"
    className={style.top}/>
    <h1>Hi from the second page</h1>
    <p>Welcome to portfolio</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
