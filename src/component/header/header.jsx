import React from 'react'
import './header.css'

function Header(props) {
  return (
    <div className='header'>
      <h2>
        X: {props.wins.xWins}
        </h2>
      <h2>
        Turn : <span className='turn'>{props.turn}</span>
        </h2>
      <h2>
        O: {props.wins.oWins}
        </h2>
    </div>
  )
}

export default Header