import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'
import avatar from './../images/kevin_final.png'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div>
        <img
          src={avatar}
          height='202rem'
          width='197rem'
          alt='Kevin Denny II avatar with yellow hoodie that says Without Music Life Would B flat'
        />
      </div>
      <div className={styles.branding} style={{fontSize: '48px'}}>
        <Link to='/'>{siteTitle}</Link>
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to='/archive/'>Archive</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
