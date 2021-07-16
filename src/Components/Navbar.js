import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { NavIcon, Wrapper } from '../Styles/Styles'

export default function Navbar({ offset }) {
  const [state, setState] = useState(false)
  const [show, setShow] = useState(false)
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  const handleClick = ({ target }) => {
    let icon = document.getElementById('toggleIcon')
    setTimeout(() => {
      if (target === icon || icon.hasChildNodes) {
        setShow(!show)

        clearTimeout()
      } else {
        setShow(true)
      }
    }, 120)
  }

  window.onscroll = function () {
    myFunction()
  }

  function myFunction() {
    if (window.pageYOffset > offset) {
      setState(true)
    } else {
      setState(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', () => setWindowSize(window.innerWidth))
    windowSize > 930 && setShow(false)

    return () =>
      window.removeEventListener('resize', () =>
        setWindowSize(window.innerWidth)
      )
  }, [windowSize])

  useEffect(() => {
    setShow(window.innerWidth > 930 ? false : true)

    const toggle = document.querySelector('.toggle')
    const inputRef = document.querySelector('#inputref')

    inputRef.addEventListener('click', handleClick)
    inputRef.onclick = () => {
      if (inputRef.hasChildNodes(toggle)) {
        if (show) {
          setShow(!show)
        }
      } else {
        if (!show) {
          setShow(show)
        }
      }
    }
  }, [])

  const activeStyles = {
    color: '#4a5cfa',
  }

  return (
    <nav className={state ? 'navbarArea navbarFixed' : 'navbarArea'}>
      <NavLink exact activeStyle={activeStyles} to="/#">
        <li className="navbar-brand">Saydullaev</li>
      </NavLink>
      <ul
        className="navbarNav"
        style={{
          transition: 'display .3s linear',
          display: show && window.innerWidth < 930 ? 'none' : 'flex',
        }}
        ref={node => {
          node = node
        }}
      >
        <li className="navItem">
          <NavLink exact activeStyle={activeStyles} className="navItem" to="/#">
            Home
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink
            exact
            activeStyle={activeStyles}
            className="navItem"
            to="/#about"
          >
            ABOUT
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink
            activeStyle={activeStyles}
            className="navItem"
            to="/#services"
          >
            SERVICES
          </NavLink>
        </li>
        <li className="navItem" id="pagesHover">
          <NavLink
            activeStyle={activeStyles}
            className="navItem"
            to="/#portfolio"
          >
            PORTFOLIO
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink
            exact
            activeStyle={activeStyles}
            className="navItem"
            to="/#contact"
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
      <div className="toggle">
        <Wrapper>
          <NavIcon onClick={handleClick} id="toggleIcon" />
        </Wrapper>
      </div>
    </nav>
  )
}
