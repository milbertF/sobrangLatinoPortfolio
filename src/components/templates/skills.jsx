import React, { Component } from "react";
import "./../styles/skills.css";
import Html from "./../images/skills/html.png";
import Css from "./../images/skills/css.png";
import Js from "./../images/skills/js.png";
import React2 from "./../images/skills/React.svg";
import Github from "./../images/skills/GitHub.svg";

export class Skills extends Component {
  componentDidMount() {
    const skillsWrappers = document.querySelectorAll(".skillsWrapper");
    const skillsCards = document.querySelectorAll(".skillsCard");
    const skillsBlurs = document.querySelectorAll(".skillsBlur");

    // Hide blur effect initially
    skillsBlurs.forEach((blur) => {
      blur.style.display = "none";
    });

    skillsCards.forEach((card, index) => {
      const skillsWrapper = skillsWrappers[index]; // Get corresponding wrapper
      const skillsBlur = skillsBlurs[index]; // Get corresponding blur effect

      card.addEventListener("mousemove", function (e) {
        let rect = card.getBoundingClientRect();
        let x = e.clientX - rect.left - rect.width / 2;
        let y = e.clientY - rect.top - rect.height / 2;

        card.style.transform = `rotateX(${-y / -20}deg) rotateY(${x / -20}deg)`;

        // Show and move skillsBlur effect
        if (skillsBlur) {
          skillsBlur.style.display = "block";
          const wrapperRect = skillsWrapper.getBoundingClientRect();
          let blurX = e.clientX - wrapperRect.left - skillsBlur.offsetWidth / 2;
          let blurY = e.clientY - wrapperRect.top - skillsBlur.offsetHeight / 2;

          skillsBlur.style.transform = `translate(${blurX}px, ${blurY}px)`;
        }
      });

      card.addEventListener("mouseleave", function () {
        card.style.transform = "rotateX(0deg) rotateY(0deg)";

        // Hide the blur effect when mouse leaves
        if (skillsBlur) {
          skillsBlur.style.display = "none";
        }
      });
    });
  }

  
    render() {
      return (
        <div className="SkillsWhole">
          <div className="skillsContent">
            <div className="skillsWrapper">
              <div className="skillsCard skills1">
                <div className="skillsBlur"></div>
                <div className="skillsOverlay">
                  <h3>HTML</h3>
                  <div className="spart">
                    <p>Proficiency</p>
                    <div className="smeter">
                      <p>Advanced</p>
                    </div>
                  </div>
                  <div className="spart">
                    <p>Mastery</p>
                    <div className="smeter">
                      <p>85%</p>
                      <meter value="85" min="0" max="100"></meter>
                    </div>
                  </div>
                  <div className="spart">
                    <p>Practical Experience</p>
                    <div className="smeter">
                      <p>3 years</p>
                    </div>
                  </div>
                  <div className="spart">
                    <p>Strengths</p>
                    <div className=" smeterStrengths">
                      <p>Efficient form structures, screen reader compatibility, Minimized inline scripts, proper image formats</p>
                    </div>
                  </div>
                </div>
                <img src={Html} alt="Skill 1" />
              </div>
            </div>
            <div className="skillsWrapper">
              <div className="skillsCard skills2">
                <div className="skillsBlur"></div>
                <div className="skillsOverlay">
                  <h3>CSS</h3>
                  <div className="spart">
                    <p>Proficiency</p>
                    <div className="smeter">
                      <p>Advanced</p>
                    </div>
                  </div>
                  <div className="spart">
                    <p>Mastery</p>
                    <div className="smeter">
                      <p>90%</p>
                      <meter value="90" min="0" max="100"></meter>
                    </div>
                  </div>
                  <div className="spart">
                    <p>Practical Experience</p>
                    <div className="smeter">
                      <p>3 years</p>
                    </div>
                  </div>
                  <div className="spart">
                    <p>Strengths</p>
                    <div className=" smeterStrengths">
                      <p>Modern layout techniques, Animations & Transitions, Responsive Web Design, Clean and Efficient Styling</p>
                    </div>
                  </div>
                </div>
                <img src={Css} alt="Skill 2" />
              </div>
            </div>
            <div className="skillsWrapper">
              <div className="skillsCard skills3">
                <div className="skillsBlur"></div>
                <div className="skillsOverlay">
                  <h3>JAVASCRIPT</h3>
                  <div className="spart">
                    <p>Proficiency</p>
                    <div className="smeter">
                      <p>Intermediate</p>
                    </div>
                  </div>
                  <div className="spart">
                    <p>Mastery</p>
                    <div className="smeter">
                      <p>60%</p>
                      <meter value="60" min="0" max="100"></meter>
                    </div>
                  </div>
                  <div className="spart">
                    <p>Practical Experience</p>
                    <div className="smeter">
                      <p>2 years</p>
                    </div>
                  </div>
                  <div className="spart">
                    <p>Strengths</p>
                    <div className=" smeterStrengths">
                      <p>Working with JSON, Error Handling, LocalStorage & SessionStorage</p>
                    </div>
                  </div>
                </div>
                <img src={Js} alt="Skill 3" />
              </div>
            </div>
            <div className="skillsWrapper">
              <div className="skillsCard skills4">
                <div className="skillsBlur"></div>
                <div className="skillsOverlay"></div>
                <img src={React2} alt="Skill 4" />
              </div>
            </div>
            <div className="skillsWrapper">
              <div className="skillsCard skills5">
                <div className="skillsBlur"></div>
                <div className="skillsOverlay"></div>
                <img src={Github} alt="Skill 5" />
              </div>
            </div>
            <div className="skillsWrapper">
              <div className="skillsCard skills6">
                <div className="skillsBlur"></div>
                <div className="skillsOverlay">
                  <p>Special Skill: magaling magpanggap na ok lang kahit nasasaktan na</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Skills;