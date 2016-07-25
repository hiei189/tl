import React, { PropTypes } from 'react'
const styles = {
  fullHeight:{
    height:'100%'
  }
}
const GlobalSearch = (props) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <form style={styles.fullHeight}>
          <div className="input-field" style={styles.fullHeight}>
            <input id="search" type="search"  required/>
            <label htmlFor="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  )
}

export default GlobalSearch
