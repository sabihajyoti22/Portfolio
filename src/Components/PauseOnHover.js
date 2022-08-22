import React, { Component } from "react";
import Slider from "react-slick";
import { SiCoffeescript } from "react-icons/si"
import { RiUser2Fill } from "react-icons/ri"
import { RiChatVoiceFill } from "react-icons/ri"
import { FaFantasyFlightGames } from "react-icons/fa"
import { IconContext } from "react-icons/lib";
import { FaCameraRetro } from "react-icons/fa";
import { MdOutlineRealEstateAgent } from "react-icons/md";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div>
        <IconContext.Provider value={{size: "3rem", color: "#E95A59"}}>
        <Slider {...settings}>
        <div>
            <a href="https://sabihajyoti22.github.io/Web-Studio/" target="blank" style={{textDecoration: "none"}}>
              <div className="projects-col m-2 p-3 text-center">
                <FaCameraRetro />
                <h2 style={{color: "#E95A59"}}>Web Studio</h2>
                <p className="projects-title">HTML, CSS, JavaScript</p>
                <p className="projects-desc">
                  Et sea sadipscing dolor lorem accusam voluptua sed rebum aliquyam. Dolore et kasd erat gubergren dolor kasd vero at. Eirmod accusam eirmod sea justo diam sea, et dolores sit consetetur.
                </p>
              </div>
            </a>
          </div>
          <div>
            <a href="https://sabihajyoti22.github.io/Cafe-De-Burew/" target="blank" style={{textDecoration: "none"}}>
              <div className="projects-col m-2 p-3 text-center">
                <SiCoffeescript />
                <h2 style={{color: "#E95A59"}}>Cafe De Burew</h2>
                <p className="projects-title">HTML, CSS, JavaScript, Bootstrap</p>
                <p className="projects-desc">
                  Et sea sadipscing dolor lorem accusam voluptua sed rebum aliquyam. Dolore et kasd erat gubergren dolor kasd vero at. Eirmod accusam eirmod sea justo diam sea, et dolores sit consetetur.
                </p>
              </div>
            </a>
          </div>
          <div>
            <a href="https://user-management-app-2022.netlify.app/" target="blank" style={{textDecoration: "none"}}>
              <div className="projects-col m-2 p-3 text-center">
                <RiUser2Fill />
                <h2 style={{color: "#E95A59"}}>User Management App</h2>
                <p className="projects-title">MongoDB, Express, React, NodeJS</p>
                <p className="projects-desc">
                  Et sea sadipscing dolor lorem accusam voluptua sed rebum aliquyam. Dolore et kasd erat gubergren dolor kasd vero at. Eirmod accusam eirmod sea justo diam sea, et dolores sit consetetur.
                </p>
              </div>
            </a>
          </div>
          <div>
            <a href="https://chat-box-2022.netlify.app/" target="blank" style={{textDecoration: "none"}}>
              <div className="projects-col m-2 p-3 text-center">
                <RiChatVoiceFill />
                <h2 style={{color: "#E95A59"}}>Chat Box</h2>
                <p className="projects-title">MongoDB, Express, React, NodeJS, Scoket</p>
                <p className="projects-desc">
                  Et sea sadipscing dolor lorem accusam voluptua sed rebum aliquyam. Dolore et kasd erat gubergren dolor kasd vero at. Eirmod accusam eirmod sea justo diam sea, et dolores sit consetetur.
                </p>
              </div>
            </a>
          </div>
          <div>
            <a href="https://quiet-quokka-47811a.netlify.app/" target="blank" style={{textDecoration: "none"}}>
              <div className="projects-col m-2 p-3 text-center">
                <MdOutlineRealEstateAgent />
                <h2 style={{color: "#E95A59"}}>Service Agency</h2>
                <p className="projects-title">Complete MERN with Web Authentication</p>
                <p className="projects-desc">
                  Et sea sadipscing dolor lorem accusam voluptua sed rebum aliquyam. Dolore et kasd erat gubergren dolor kasd vero at. Eirmod accusam eirmod sea justo diam sea, et dolores sit consetetur.
                </p>
              </div>
            </a>
          </div>
          <div>
            <a href="https://sabihajyoti22.github.io/Guessing-Game/" target="blank" style={{textDecoration: "none"}}>
              <div className="projects-col m-2 p-3 text-center">
                <FaFantasyFlightGames />
                <h2 style={{color: "#E95A59"}}>Guessing Game</h2>
                <p className="projects-title">HTML, CSS, JavaScript</p>
                <p className="projects-desc">
                  Et sea sadipscing dolor lorem accusam voluptua sed rebum aliquyam. Dolore et kasd erat gubergren dolor kasd vero at. Eirmod accusam eirmod sea justo diam sea, et dolores sit consetetur.
                </p>
              </div>
            </a>
          </div>
        </Slider>
        </IconContext.Provider>
      </div>
    );
  }
}