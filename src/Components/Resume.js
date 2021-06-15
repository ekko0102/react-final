import React, { Component } from "react";
import Slide from "react-reveal";



const Resume = (props)=>{
  return (
    <div>
      <br/>
      {props.data.map(item=>{
        return(
            <p align="center">
              <iframe width="560" height="360" src={item.Link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
                </p>
        )
      })}
</div>
    );
}
// class Resume extends Component {
  

//   render() {
//     if (!this.props.data) return null;
    

//     return (
//       <div>
//         <br/>
//         {this.props.data.map(item=>{
//           return(
//               <p align="center"><iframe width="560" height="360" src={item.Link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

//           )
//         })}
//  </div>
//       );
//   }
// }

export default Resume;



