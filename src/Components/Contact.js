import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
    constructor(props){
      super(props)
      this.onSumit = this.onSumit.bind(this)
      this.handleChangeName = this.handleChangeName.bind(this)
      this.handleChangeEmail = this.handleChangeEmail.bind(this)
      this.handleChangeSubject = this.handleChangeSubject.bind(this)
      this.handleChangeMessage = this.handleChangeMessage.bind(this)
      this.state = {
        send:false,
        Name:"",
        Email: "",
        Subject:"",
        Message:""
      }
    }

  handleChangeName(event){
    this.setState(prevState => (
      {
        send : prevState.send,
        Name : event.target.value,
        Email : prevState.Email,
        Subject : prevState.Subject,
        Message : prevState.Message
      }
    ))
    console.log(this.state.Name)
    }
  handleChangeEmail(event){
    this.setState(prevState => (
      {
        send : prevState.send,
        Name : prevState.Name,
        Email : event.target.value,
        Subject : prevState.Subject,
        Message : prevState.Message
      }
    ))
    console.log(this.state.Email)
    
  }
  handleChangeSubject(event){
    this.setState(prevState => (
      {
        send : prevState.send,
        Name : prevState.Name,
        Email : prevState.Email,
        Subject : event.target.value,
        Message : prevState.Message
      }
    ))
    console.log(this.state.Subject)
    
  }
  handleChangeMessage(event){
    this.setState(prevState => (
      {
        send : prevState.send,
        Name : prevState.Name,
        Email : prevState.Email,
        Subject : prevState.Subject,
        Message : event.target.value
      }
    ))
    console.log(this.state.Message)
  }


  onSumit(event){
    console.log("test")
    event.preventDefault();
    this.setState(prevState => (
      {
        send : true,
        Name : prevState.Name,
        Email : prevState.Email,
        Subject : prevState.Subject,
        Message : event.target.value
      }
    ))
    console.log(this.state.Name)
    console.log(this.state.Email)
    console.log(this.state.Subject)
    console.log(this.state.Message)
    alert("thank you for your feeback!")

    
  }

  render() {
    if (!this.props.data) return null;

    return (
      <p align="center">
      <section id="contact">
        {/* <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="t columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>
            
          </div>
        </Fade> */}
        <p id="contact_head">聯絡我們</p>
        <br/>
        <div className="row">
          <Slide left duration={1000}>
            <div className="ten columns">
            
              <form id="contactForm" name="contactForm" onSubmit={this.onSumit}>
                <fieldset>   
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactName"
                      name="contactName"
                      onChange={this.handleChangeName}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactEmail"
                      name="contactEmail"
                      onChange={this.handleChangeEmail}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactSubject"
                      name="contactSubject"
                      onChange={this.handleChangeSubject}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols="20"
                      rows="10"
                      id="contactMessage"
                      name="contactMessage"
                      onChange={this.handleChangeMessage}
                    ></textarea>
                  </div>

                  <div>
                    <button className="submit">Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                 
                </fieldset>
              </form>
        
              <div id="message-warning"> Error boy</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
          </Slide>

         
        </div>
      
      </section>
      </p>
    );
  }
}

export default Contact;
