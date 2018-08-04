import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import Chat from './Chat/Chat'
import Footer from './Footer/Footer'
import Header from '../components/header';
import "./reset.css"
import style from './index.module.css'


const Layout = ({ children, data }) => (
  <div className={style.body}>
    <Helmet 
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    /> 
    <div >
    <div className={style.header}>
      <div className= {style.headbar}> 
      <div className={style.headerLeft}>
        {/* <Logo className={style.logo} /> */}
        <Menu className={style.menu}/> 
        </div>
     </div>
    <Chat/>
    </div>
    {children()} 
    <Footer className={style.footer}/>

  </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

