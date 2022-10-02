import React, { Component } from "react";
import Slider from "react-slick";
import { SiCoffeescript } from "react-icons/si"
import { RiUser2Fill } from "react-icons/ri"
import { RiChatVoiceFill } from "react-icons/ri"
import { FaFantasyFlightGames } from "react-icons/fa"
import { IconContext } from "react-icons/lib";
import { FaCameraRetro } from "react-icons/fa";
import { MdOutlineRealEstateAgent, MdOutlineSupervisedUserCircle } from "react-icons/md";

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
                  Simple landing page of a e-commarce website without any logic operation. Just used HTML CSS and BootStrap framework to make it more interective. Also used JavaScript to create a countdown timer
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
                  A simple single page website where anyone can order a cafe through logging in. User authentication and shopping cart is handled by JavaScript and BootStarp is used for styling. No database is used here.
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
                  This website is a complete MERN project where users information is stored. Some users can be deleted and edited through this website. Server is deployed in Heroku and frontend is deployed in Netlify
                </p>
              </div>
            </a>
          </div>
          <div>
            <a href="https://chat-box-app-2022.netlify.app/" target="blank" style={{textDecoration: "none"}}>
              <div className="projects-col m-2 p-3 text-center">
                <RiChatVoiceFill />
                <h2 style={{color: "#E95A59"}}>Chat Box</h2>
                <p className="projects-title">Express, React, NodeJS, Scoket</p>
                <p className="projects-desc">
                  Chat Box is a online messaging website. Only two users can communicate with each other at a time by choosing same chatroom. For connecting two processes Scoket.io is used.
                </p>
              </div>
            </a>
          </div>
          <div>
            <a href="https://quiet-quokka-47811a.netlify.app/" target="blank" style={{textDecoration: "none"}}>
              <div className="projects-col m-2 p-3 text-center">
                <MdOutlineRealEstateAgent />
                <h2 style={{color: "#E95A59"}}>Service Agency</h2>
                <p className="projects-title">MongoDB, Express, React, NodeJS</p>
                <p className="projects-desc">
                  This is an online service providing website. Where a user can find there required service and can request to get them. Where admin can also see the requests. User authentication is handled by google sign in.
                </p>
              </div>
            </a>
          </div>
          <div>
            <a href="https://user-management-system-vue-2022.netlify.app/" target="blank" style={{textDecoration: "none"}}>
              <div className="projects-col m-2 p-3 text-center">
                <MdOutlineSupervisedUserCircle />
                <h2 style={{color: "#E95A59"}}>User Management Vue</h2>
                <p className="projects-title">Vue, Vuetify, Vuex</p>
                <p className="projects-desc">
                  This website contains only frontend. Using vue a user management system has created to mange user. An admin can update, delete or edit an employee
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
                  It is simple guessing game. Where a user has to input a number and the backend will generate a random number. When the user guesses the correct random number he/she wins the game. A user has only three chance for that.
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