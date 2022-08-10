import React from "react";
import { Container, DevContainer } from "./styles";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import matheus_dev from "../../assets/img/matheus_dev.png";
import stefany_dev from "../../assets/img/stefany_dev.jpg";
import beatriz_dev from "../../assets/img/beatriz_dev.jpg";
import arthur_dev from "../../assets/img/arthur_dev.jpg";
import gisela_dev from "../../assets/img/gisela_dev.jpg";
import vinicius_dev from "../../assets/img/vinicius_dev.jpg";

const FooterLandingPage = () => {
  return (
    <Container>
      <div>
        <DevContainer>
          <figure>
            <img src={arthur_dev} alt="" />
          </figure>
          <p>Arthur Russo</p>
          <span>QA</span>
          <div>
            <a
              className="icon"
              href="https://github.com/arthur-r-goncalves"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className="icon"
              href="https://www.linkedin.com/in/arthur-r-goncalves"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </DevContainer>
        <DevContainer>
          <figure>
            <img src={beatriz_dev} alt="" />
          </figure>
          <p>Beatriz Munhoz</p>
          <span>PO</span>
          <div>
            <a
              className="icon"
              href="https://github.com/beatrizmunhozl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className="icon"
              href="https://www.linkedin.com/in/beatriz-munhoz-de-lima-0251b8226/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </DevContainer>
        <DevContainer>
          <figure>
            <img src={gisela_dev} alt="" />
          </figure>
          <p>Gisela Mariano</p>
          <span>QA</span>
          <div>
            <a
              className="icon"
              href="https://github.com/gisela-mariano"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className="icon"
              href="https://www.linkedin.com/in/gisela-mariano-3b8bb3170/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </DevContainer>
        <DevContainer>
          <figure>
            <img src={matheus_dev} alt="" />
          </figure>
          <p>Matheus Rocha</p>
          <span>Tech Lead</span>
          <div>
            <a
              className="icon"
              href="https://github.com/imrochamatheus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className="icon"
              href="https://www.linkedin.com/in/matheus-rocha-9076601a1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </DevContainer>
        <DevContainer>
          <figure>
            <img src={stefany_dev} alt="" />
          </figure>
          <p>Stefany Felix</p>
          <span>Scrum Master</span>
          <div>
            <a
              className="icon"
              href="https://github.com/stefanyfellix"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className="icon"
              href="https://www.linkedin.com/in/stefany-felix-a12229238/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </DevContainer>
        <DevContainer>
          <figure>
            <img src={vinicius_dev} alt="" />
          </figure>
          <p>Vinícius Trindade</p>
          <span>QA</span>
          <div>
            <a
              className="icon"
              href="https://github.com/tryndadi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className="icon"
              href="https://www.linkedin.com/in/trindadevinicius/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </DevContainer>
      </div>
      <span className="copyright">Kenzie Academy Brazil &copy; 2022</span>
    </Container>
  );
};

export default FooterLandingPage;
