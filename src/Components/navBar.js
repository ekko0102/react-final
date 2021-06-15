import { React } from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
    return (
        <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
                <Link to="/">
                    歡迎
                </Link>
          </li>

          <li>
                <Link to="/about">
                     PG ONE 介紹
                </Link>
          </li>

          <li>
                <Link to="/profilio">
                    PG ONE 表情包
                </Link>
          </li>

          <li>
                <Link to="/resume">
                    饒舌作品
                </Link>
          </li>

          <li>
                <Link to="/contact">
                    聯絡我們
                </Link>
          </li>
        </ul>
      </nav>
      
    )

}

export default NavBar