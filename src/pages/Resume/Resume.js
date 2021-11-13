import React from "react";
import PDF from "../../assets/files/Zahra_Mertens_Resume.pdf";
import Mario from "../../assets/images/maario.gif";
import Box from "../../assets/images/box.png";
import MyResume from "../../assets/images/myResume.png";
import "./resume.css";
import {
  FaDownload,
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNode,
  FaDatabase,
  FaCode,
  FaNpm,
} from "react-icons/fa";

export default function Resume() {
  return (
    <div className="resumePage">
      <div className="resume-wrapper container-resume">
        <div className="glass-container-resume">
          <div className="row justify-content-center">
            <div className="resume-header-container">
              <div className="row justify-content-center">
                <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-5 col-xs-6 col-8">
                  <p className="resume-header">Resume</p>
                </div>
              </div>
            </div>
            <div className="resume-content-container">
              <div className="row justify-content-center">
                <div className="col-3">
                  <a
                    className="download-a"
                    href={PDF}
                    download="ZahraMertensResume"
                  >
                    <img src={Box} className="download-icon" alt="box"/> <img src={MyResume} className="myResume" alt="resume"/> 
                  </a>
                </div>
              </div>
            </div>
            <div className="proficiencies-header-container">
              <div className="row justify-content-center">
                <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-5 col-xs-6 col-8">
                  <p className="proficiencies-header">Proficiencies</p>
                </div>
              </div>
            </div>
            <div className="proficiencies-container">
              <div className="row justify-content-center">
                <div className="col-xxl col-xl col-lg col-md-6 col-sm-6 col-xs-12 col-12">
                  <h1 className="subheader-resume">Frontend</h1>
                  <p>
                    <FaHtml5 /> HTML
                  </p>
                  <p>
                    <FaCss3 /> CSS
                  </p>
                  <p>
                    <FaJs /> JavaScript
                  </p>
                  <p>
                    <FaBootstrap /> Bootstrap, Bulma, Materialize
                  </p>
                  <p>
                    <FaReact /> React.js, Component UI's
                  </p>
                  <p>
                    <FaReact /> Redux, Context API
                  </p>
                  <p>
                    <FaCode /> jQuery
                  </p>
                  <p>
                    <FaCode /> Apollo-Client
                  </p>
                </div>
                <div className="col-xxl col-xl col-lg col-md-6 col-sm-6 col-xs-12 col-12">
                  <h1 className="subheader-resume">Backend</h1>
                  <p>
                    <FaNode /> Node.js, Express.js
                  </p>
                  <p>
                    <FaCode /> PWA: Web Manifest, IndexedDB, Service-Worker
                  </p>
                  <p>
                    <FaCode /> Multer
                  </p>
                  <p>
                    <FaCode /> Socket.io
                  </p>
                  <p>
                    <FaCode /> API
                  </p>
                  <p>
                    <FaCode /> REST
                  </p>
                  <p>
                    <FaCode /> JWT
                  </p>
                  <p>
                    <FaCode /> Stripe
                  </p>
                  <p>
                    <FaCode /> Model View Controller (MVC)
                  </p>
                </div>
                <div className="col-xxl col-xl col-lg col-md-6 col-sm-6 col-xs-12 col-12">
                  <h1 className="subheader-resume">Dev Tools</h1>
                  <p>
                    <FaCode /> GitHub, GitLab
                  </p>
                  <p>
                    <FaCode /> AWS S3
                  </p>
                  <p>
                    <FaNpm /> npm
                  </p>
                  <p>
                    <FaCode /> Webpack
                  </p>
                  <p>
                    <FaCode /> Jest
                  </p>
                  <p>
                    <FaCode /> Heroku
                  </p>
                  <p>
                    <FaCode /> Insomnia/Postman
                  </p>
                </div>
                <div className="col-xxl col-xl col-lg col-md-6 col-sm-6 col-xs-12 col-12">
                  <h1 className="subheader-resume">Database</h1>
                  <p>
                    <FaDatabase /> MySQL, Sequelize
                  </p>
                  <p>
                    <FaDatabase /> MongoDB, Mongoose
                  </p>
                  <p>
                    <FaDatabase /> GraphQL, Apollo-Express-Server
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={Mario} className="mario-gif" alt="mario" />
    </div>
  );
}
