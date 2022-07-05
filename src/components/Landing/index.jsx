import React from "react"; 
import Particles from "react-tsparticles";
import { loadFull } from 'tsparticles'
import {
  Styledlanding,
  Styledheader,
  LandingOverlay,
} from "../../styles/landing.style";
import Scroll from "./scrolldown";
import networked from "../../assets/images/NetworkEd.png";
import hummingbirds from "../../assets/images/hummingbird.svg";

const Landing = () => {

  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <Styledlanding name="home">
      <Scroll />
      <LandingOverlay>
        <img
          src={networked}
          alt={"networkED Logo in the center"}
          
        />
      </LandingOverlay>
      <Styledheader>
        <div>The Language</div>
      </Styledheader>
      <Styledheader>
        <div>Of Thought</div>
      </Styledheader>
      <Particles
        id="tsparticles"
        init={particlesInit}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
        }}
        params={{
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 1440,
              },
            },
            color: {
              value: "#ffd54d",
            },
            shape: {
              type: "image",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 6,
              },
              image: {
                src: hummingbirds,
                width: 800,
                height: 800,
              },
            },
            opacity: {
              value: 0.8,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.2,
                sync: false,
              },
            },
            size: {
              value: 40,
              random: true,
              anim: {
                enable: true,
                speed: 5,
                size_min: 1,
                sync: true,
              },
            },
            line_linked: {
              enable: true,
              distance: 300,
              color: "#e6b000",
              opacity: 0.7,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.2,
              direction: "random",
              random: false,
              straight: false,
              out_mode: "bounce",
              bounce: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: false,
                mode: "grab",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 30,
                duration: 2,
                opacity: 6,
                speed: 2,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </Styledlanding>
  );
};

export default Landing;
