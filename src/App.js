import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import NavBar from "./Components/navBar";
import {apiGetProfile,apiGetImageList,apiGetMusicList} from './Components/api'
import axios from 'axios'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    axios.all([
      apiGetProfile(1),
      apiGetImageList(1),
      apiGetMusicList(1)
  ])
  .then(axios.spread((profile, image, music) => {
          console.log(profile.data)
          console.log(image.data)
          console.log(music.data)
          this.setState({
            resumeData: {
              main:profile.data,
              portfolio:image.data,
              resume:music.data
            }
          })
      }))
      .catch(err =>{
          console.log(err)
      })
    // $.ajax({
    //   url: "./resumeData.json",
    //   dataType: "json",
    //   cache: false,
    //   success: function(data) {
    //     this.setState({ resumeData: data });
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     console.log(err);
    //     alert(err);
    //   }
    // });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/"><Header data={this.state.resumeData.main} /></Route>
            <Route exact path="/about"> <About data={this.state.resumeData.main} /></Route>
            <Route exact path="/profilio"> <Portfolio data={this.state.resumeData.portfolio} /></Route>
            <Route exact path="/resume"> <Resume data={this.state.resumeData.resume} /></Route>
            <Route exact path="/contact"><Contact data={this.state.resumeData.main} /></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
