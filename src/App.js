import React from "react";
import { Img } from "react-image";
import "./App.css";
import {
  Card,
  Elevation,
  H3,
  H5,
  H2,
  Divider,
  H1,
  Tooltip,
  Position,
  Icon,
  H4,
  H6,
  Spinner,
} from "@blueprintjs/core";

import description from "./data/description.json";
import pp from "./pp5.png";
import ppLoading from "./ppLoading.jpg";

import csharp from "./logos/c#.png";
import php from "./logos/php_logo.png";
import js from "./logos/js.png";
import python from "./logos/python.png";
import react from "./logos/react.png";
import unity from "./logos/unity.png";
import node from "./logos/nodeLogo.png";
import { INTENT_PRIMARY } from "@blueprintjs/core/lib/cjs/common/classes";

const ClickWebsurg = () => {};

function App() {
  return (
    <>
      <div className="MainPage bp3-dark">
        <div className="Cards">
          <div className="left">
            <H1 className="paragraphe">
              THIBAUD
              <br />
              RITZENTHALER
            </H1>
            <address>
              <H5 className="paragraphe">
                <Icon icon="envelope" />{" "}
                <a href="mailto:thibaud.ritzenthaler@pm.me">
                  thibaud.ritzenthaler@pm.me
                </a>{" "}
              </H5>
              <H5 className="paragraphe">
                <Icon icon="mobile-phone" />{" "}
                <a href="tel:0649560055p33">06 49 56 00 55</a>
              </H5>
              <H5 className="paragraphe">
                <Icon icon="home" />{" "}
                <a href="https://www.openstreetmap.org/relation/71033#map=6/48.569/7.762">
                  Strasbourg, France
                </a>{" "}
              </H5>
            </address>
            <Img
              src={pp}
              className="pp"
              alt="profile picture"
              loader={
                <Spinner className="ppLoading" intent="Primary" size={50} />
              }
            />
            <p className="paragraphe bp3-text-muted">
              {description[0].description}
            </p>
            <H6 className="paragraphe">
              Esprit d'??quipe - Adaptabilit?? - Autonomie
            </H6>
            <H3 className="paragraphe">COMP??TENCES</H3>
            <div className="logoContainer">
              <Tooltip
                content={
                  <>
                    C Sharp <Icon icon="share" />
                  </>
                }
                position={Position.BOTTOM}
              >
                <img
                  src={csharp}
                  alt="logo"
                  onClick={() =>
                    (window.location.href =
                      "https://fr.wikipedia.org/wiki/C_sharp")
                  }
                />
              </Tooltip>
              &nbsp;
              <Tooltip
                content={
                  <>
                    Python <Icon icon="share" />
                  </>
                }
                position={Position.BOTTOM}
              >
                <img
                  src={python}
                  alt="logo"
                  onClick={() =>
                    (window.location.href =
                      "https://fr.wikipedia.org/wiki/Python_(langage)")
                  }
                />
              </Tooltip>
              &nbsp;
              <Tooltip
                content={
                  <>
                    JavaScript <Icon icon="share" />
                  </>
                }
                position={Position.BOTTOM}
              >
                <img
                  src={js}
                  alt="logo"
                  onClick={() =>
                    (window.location.href =
                      "https://fr.wikipedia.org/wiki/JavaScript")
                  }
                />
              </Tooltip>
              &nbsp;
              <Tooltip
                content={
                  <>
                    ReactJS <Icon icon="share" />
                  </>
                }
                position={Position.BOTTOM}
              >
                <img
                  src={react}
                  alt="logo"
                  onClick={() => (window.location.href = "https://reactjs.com")}
                />
              </Tooltip>
              &nbsp;
              <Tooltip
                content={
                  <>
                    NodeJS <Icon icon="share" />
                  </>
                }
                position={Position.BOTTOM}
              >
                <img
                  src={node}
                  alt="logo"
                  onClick={() =>
                    (window.location.href = "https://nodejs.org/fr/")
                  }
                />
              </Tooltip>
              &nbsp;
              <Tooltip
                content={
                  <>
                    PHP <Icon icon="share" />
                  </>
                }
                position={Position.BOTTOM}
              >
                <img
                  src={php}
                  alt="logo"
                  onClick={() =>
                    (window.location.href = "https://www.php.net/")
                  }
                />
              </Tooltip>
              &nbsp;
              <Tooltip
                content={
                  <>
                    Unity <Icon icon="share" />
                  </>
                }
                position={Position.BOTTOM}
              >
                <img
                  src={unity}
                  alt="logo"
                  onClick={() =>
                    (window.location.href = "https://unity.com/fr")
                  }
                />
              </Tooltip>
            </div>
            &nbsp;
            <div className="flags bp3-text-large">
              <div className="ukFlag">
                Anglais
                <br />
                Niveau B2
              </div>
              <div className="deFlag">
                Allemand
                <br />
                Niveau B1
              </div>
            </div>
            &nbsp;
            <H3 className="paragraphe">ACTIVIT??S</H3>
            <Card
              className="uepur"
              interactive={true}
              elevation={Elevation.ZERO}
              onClick={() =>
                (window.location.href =
                  "https://www.facebook.com/uneffortpourunreconfort")
              }
            >
              <p className="bp3-text-large">
                Membre Fondateur et vice-pr??sident de l'association caritative{" "}
                <i>Un Effort Pour Un R??confort</i>.{" "}
                <Icon iconSize={13} icon="share" />
              </p>
            </Card>
            &nbsp;
            <div className="interets">
              <H3 className="paragraphe">CENTRES D'INTER??TS</H3>

              <p className="paragrapheCenter">
                <Icon icon="mountain" />
                &nbsp;Escalade&nbsp;
                <Icon icon="cycle" />
                &nbsp;Cyclisme
              </p>
              <p className="paragrapheCenter">
                <Icon icon="film" />
                &nbsp;Cin??ma&nbsp;
                <Icon icon="application" />
                &nbsp;Jeux vid??os
              </p>
            </div>
            &nbsp;
          </div>

          <div className="rightPanel">
            <div className="experiences">
              <H2>EXPERIENCES</H2>
              <Card
                className="CardsExperiencesWebsurg"
                interactive={false}
                elevation={Elevation.ZERO}
                onClick={ClickWebsurg}
              >
                <H3>Apprenti Concepteur D??veloppeur Testeur Web</H3>
                <H5>
                  <a href="https://websurg.com/">WebSurg</a>,{" "}
                  <a href="https://www.ircad.fr/">IRCAD</a>
                </H5>
                <p>
                  Septembre 2019 ?? Septembre 2020 - Divers travaux au sein de
                  l'??quipe <a href="https://websurg.com/">WebSurg</a> li??s ?? la
                  programmation web.
                </p>
              </Card>
              <Card
                className="CardsExperiencesIntm"
                interactive={false}
                elevation={Elevation.ZERO}
              >
                <H3>Concepteur D??veloppeur Testeur</H3>
                <H5>
                  <a href="https://www.intm.fr/">INTM</a>
                </H5>
                <p>
                  CDD - Juillet 2018 ?? Ao??t 2018 - D??veloppement d'un chatbot
                  administratif avec{" "}
                  <a href="https://cloud.google.com/dialogflow">Dialogflow</a>.{" "}
                </p>
                <Divider />
                <p>
                  Stage - Avril 2018 - Juin 2018 - Recherches, tests et d??but de
                  d??veloppement d'un chatbot administratif.
                </p>
              </Card>
            </div>
            &nbsp;
            <div className="formations">
              <H2>FORMATIONS</H2>
              <Card
                className="CardsFormation"
                interactive={false}
                elevation={Elevation.ZERO}
              >
                <H3>
                  Licence Pro : Conception et d??veloppement d'applications
                  distribu??es
                </H3>
                <H5>
                  <a href="https://iutrs.unistra.fr/">
                    IUT Robert Schumann, Illkirch
                  </a>{" "}
                </H5>
                <p>
                  2020 - Dipl??me en alternance de d??veloppement informatique
                  orient?? vers la conception d???applications web.
                </p>
              </Card>
              <Card
                className="CardsFormation"
                interactive={false}
                elevation={Elevation.ZERO}
              >
                <H3>DUT Informatique</H3>
                <H5>
                  <a href="https://iutrs.unistra.fr/">
                    IUT Robert Schumann, Illkirch
                  </a>{" "}
                </H5>
                <p>
                  2019 - Dipl??me de d??veloppement informatique : programmation
                  orient??e objet, cr??ation de sites internet,
                  <br />
                  gestion de bases de donn??es, programmation bas niveau.
                </p>
              </Card>
              <Card
                className="CardsFormation"
                interactive={false}
                elevation={Elevation.ZERO}
              >
                <H3>Baccalaur??at Scientifique</H3>
                <H5>
                  <a href="http://www.lyc-yourcenar-erstein.ac-strasbourg.fr/">
                    Lyc??e Marguerite Yourcenar, Erstein
                  </a>{" "}
                </H5>
                <p>
                  2016 - Sp??cialit?? Math??matiques, Section Europ??enne Allemand,
                  Option Latin
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
