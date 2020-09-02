import {Link} from 'gatsby'
import React from 'react'
import logo from '../components/images/logo.svg'
import Icon from './icon'
import {cn} from '../lib/helpers'
import styles from './header.module.css'


const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
 
    <div className={styles.wrapper}>
      <div className={styles.branding}>


      <div className={styles.logo}>
      <img src={logo} alt="Logo"/>
      </div>
          </div>
         <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>
      
      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to='/archive/'>Movies</Link>
          </li>
          <li>
            <Link to='/archive/'>Comics</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
