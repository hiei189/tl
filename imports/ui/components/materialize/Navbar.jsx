import React, { PropTypes } from 'react'
import GlobalSearch from './GlobalSearch.jsx'

const styles = {
  fullHeight:{
    height:'100%'
  }
}

const Navbar = ({children}) => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo center">Logo</a>
          <ul className="left hide-on-med-and-down">
            {children.map((link,i)=>{
              return <li key={i}>{link}</li>
            })}
          </ul>
          <ul className="right" style={styles.fullHeight}>
            <li style={styles.fullHeight}>
              <div className="input-field" style={styles.fullHeight}>
                <input id="search" type="search"  required/>
                <label htmlFor="search"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i>
              </div>
            </li>

          </ul>
        </div>
      </nav>
  </div>
  )
}

export default Navbar
