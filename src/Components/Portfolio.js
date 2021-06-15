import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

// import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
//   small: {
//     width: theme.spacing(3),
//     height: theme.spacing(3),
//   },
//   large: {
//     width: theme.spacing(10),
//     height: theme.spacing(10),
//   },

const Portfolio = (props)=> {
  // const classes = useStyles();

  return (
    <div >
      {props.data.map(item=>{
        return(
          <p align="center"><img src={item.imageURL}/></p>
        )
      })}

    </div>
  );
}
export default Portfolio
// class Portfolio extends Component {
//   render() {
//     // if (!this.props.data) return null;

//     // const projects = this.props.data.projects.map(function (projects) {
//     //   let projectImage = "images/portfolio/" + projects.image;

//     //   return (
//     //     <div key={id++} className="columns portfolio-item">
//     //       <div className="item-wrap">
//     //         <Zmage alt={projects.title} src={projectImage} />
//     //         <div style={{ textAlign: "center" }}>{projects.title}</div>
//     //       </div>
//     //     </div>
//     //   );
//     // });

//     // return (
//     //   <section id="portfolio">
//     //     <Fade left duration={1000} distance="40px">
//     //       <div className="row">
//     //         <div className="twelve columns collapsed">
//     //           <h1>Check Out Some of My Works.</h1>

//     //           <div
//     //             id="portfolio-wrapper"
//     //             className="bgrid-quarters s-bgrid-thirds cf"
//     //           >
//     //             {projects}
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </Fade>
//     //   </section>
//     // );
//     return(

//       <div>
//           <p align="center"><img src="images/eye.jpg"/></p>
//           <p align="center"><img src="images/fly.jpg"/></p>
//           <p align="center"><img src="images/mine.jpg"/></p>
//           <p align="center"><img src="images/heart.jpg"/></p>
//           <p align="center"><img src="images/love.jpg"/></p>
//       </div>
//     );
//   }
// }

// export default Portfolio;

