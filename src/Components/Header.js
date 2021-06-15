import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        {/* <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="/">
                歡迎
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="/about">
                PG ONE 介紹
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="/profilio">
                PG ONE 表情包
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="/resume">
                饒舌作品
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="/contact">
                聯絡我們
              </a>
            </li>
          </ul>
        </nav>
         */}
        <div className="row banner">
          <div className="banner-text">
            <br/>
            <Fade bottom>
              <h1 className="responsive-headline">PG ONE For You</h1>
            </Fade>
            <hr />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
