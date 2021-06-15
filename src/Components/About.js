import React, { Component } from "react";
import Fade from "react-reveal";
import {getProfile} from '../Components/api'

class About extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="FOUR columns">
              <img
                className="profile-pic"
                src={this.props.data.info.Avatar}
                alt="PG ONE FOR YOU"
              />
            </div>
            <div className="seven columns main-col">
              <h2>{this.props.data.info.NickName} (本名{this.props.data.info.Name})</h2>

              <p> {this.props.data.info.Bio}</p>
              <div className="row">
                <div className="columns">
                  <h2><b>獲獎紀錄</b></h2>
                  <p className="">
                    <span>
                      {this.props.data.event.map(item=>{
                        return (
                          <span>
                            {item.message}
                            <br/>
                          </span>
                        )
                      })}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
