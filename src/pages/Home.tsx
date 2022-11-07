import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Accueil from "../components/Accueil";
import Component2 from "../components/Component2";
import "./Home.css";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBtnDevisContainerClick = useCallback(() => {
    navigate("/conception");
  }, [navigate]);

  return (
    <div className="home-div">
      <img className="group-icon" alt="" src="../group-40.svg" />
      <div className="component-4-div">
        <div className="menu-div">
          <div className="menu-div1">
            <b className="accueil-b">Accueil</b>
          </div>
          <div className="menu-div2">
            <b className="accueil-b">Services</b>
          </div>
          <div className="menu-div3">
            <Accueil />
          </div>
          <div className="menu-div4">
            <b className="accueil-b">Contact</b>
          </div>
          <div className="menu-div5">
            <b className="accueil-b">Témoignages</b>
          </div>
          <div className="menu-div6">
            <b className="accueil-b">A propos</b>
          </div>
        </div>
        <img className="logo-icon" alt="" src="../logo@2x.png" />
      </div>
      <div className="group-div">
        <div className="group-div1">
          <div className="group-div2">
            <div className="group-a-div">
              <div className="group-div1">
                <div className="rectangle-div" />
                <div className="rectangle-div1" />
                <div className="rectangle-div2" />
                <b className="conception-et-mtrage">Conception et métrage</b>
                <b className="prise-des-mesures-et-relev-pr">
                  <p className="prise-des-mesures">{`Prise des mesures et relevé précis `}</p>
                  <p className="laide-dun-appreil">
                    à l’aide d’un appreil laser en trois dimensions.
                  </p>
                </b>
              </div>
              <img className="aa-1-icon" alt="" src="../aa-1@2x.png" />
            </div>
            <div className="btn-devis-div" onClick={onBtnDevisContainerClick}>
              <div className="rectangle-div3" />
              <b className="voir-plus-b">Voir plus</b>
            </div>
          </div>
          <div className="group-div4">
            <div className="group-b-div">
              <div className="group-div1">
                <div className="group-div1">
                  <div className="rectangle-div" />
                  <div className="rectangle-div5" />
                  <div className="rectangle-div6" />
                  <b className="conception-et-mtrage">Travaux préparatifs</b>
                  <b className="prise-des-mesures-et-relev-pr">
                    Nous réalisons tous les travaux de création et modification
                    des installations électriques et de la plomberie préalables
                    à la pose de votre future cuisine ou salle de bain.
                  </b>
                </div>
              </div>
              <img className="aa-1-icon1" alt="" src="../aa-11@2x.png" />
            </div>
            <div className="btn-devis-div1">
              <div className="rectangle-div7" />
              <b className="voir-plus-b1">Voir plus</b>
            </div>
          </div>
          <div className="group-div7">
            <div className="group-c-div">
              <div className="group-div1">
                <div className="rectangle-div" />
                <div className="rectangle-div9" />
                <div className="rectangle-div10" />
                <b className="conception-et-mtrage">Installation</b>
                <b className="prise-des-mesures-et-relev-pr">
                  <p className="prise-des-mesures">
                    Confiez-nous l’installation de votre cuisine, salle de bain,
                    dressing
                  </p>
                  <p className="laide-dun-appreil">
                    {" "}
                    et aussi tous vos rangements.
                  </p>
                </b>
                <img className="aa-1-icon2" alt="" src="../aa-12@2x.png" />
              </div>
            </div>
            <div className="btn-devis-div2">
              <div className="rectangle-div11" />
              <b className="voir-plus-b2">Voir plus</b>
            </div>
          </div>
        </div>
      </div>
      <div className="tmoignage-div">
        <div className="group-div9">
          <img className="oip-1-icon" alt="" src="../oip-1@2x.png" />
        </div>
        <div className="group-div10">
          <b className="tmoignages-b">Témoignages</b>
          <b className="vous-avez-eu-recours-nos-ser">
            <p className="prise-des-mesures">
              Vous avez eu recours à nos services ? Nous souhaiterions connaître
              votre avis sur cette expérience.
            </p>
            <p className="laide-dun-appreil">
              Nous vous remercions de bien vouloir consacrer un court instant à
              ce questionnaire
            </p>
          </b>
          <div className="btn-devis-div3">
            <div className="rectangle-div12" />
            <b className="voir-plus-b3">Laissez-nous votre avis</b>
          </div>
        </div>
        <div className="group-div11">
          <div className="group-div12">
            <div className="rectangle-div13" />
            <div className="group-div13">
              <b className="jordane-perot-b">Jordane PEROT</b>
              <div className="cabinet-mdical-div">Cabinet médical</div>
            </div>
            <div className="nous-nous-sommes-fis-aux-avis">
              Nous nous sommes fiés aux avis sur internet. En outre, nous avons
              eu un super premier contact avec l’équipe BRAVOTRAVO qui a très
              vite compris notre projet. Ils ont eu de très bons conseils et de
              très bonnes idées quant à la disposition des différentes parties
              du cabinet médical.
            </div>
            <div className="rectangle-div14" />
            <div className="div">,,</div>
            <img className="avatar1-1-icon" alt="" src="../avatar1-1@2x.png" />
          </div>
          <div className="group-div14">
            <div className="rectangle-div13" />
            <div className="group-div13">
              <b className="jordane-perot-b">Maria SIMOUNI</b>
              <div className="cabinet-mdical-div">Cuisine équipée</div>
            </div>
            <div className="nous-nous-sommes-fis-aux-avis">
              <p className="prise-des-mesures">
                J’ai confié la pose de ma cuisine à l’équipe de BRAVOTRAVO et je
                suis très très satisfait du résultat.
              </p>
              <p className="prise-des-mesures"></p>
              <p className="laide-dun-appreil">Encore Bravo BRAVOTRAVO!</p>
            </div>
            <div className="rectangle-div14" />
            <div className="div">,,</div>
            <img className="avatar1-1-icon" alt="" src="../avatar1-11@2x.png" />
          </div>
          <div className="group-div16">
            <div className="rectangle-div13" />
            <div className="group-div13">
              <b className="jordane-perot-b">Romain ENGOLO</b>
              <div className="cabinet-mdical-div">Salle de bain</div>
            </div>
            <div className="nous-nous-sommes-fis-aux-avis">
              <p className="prise-des-mesures">
                Les travaux ont été réalisés conformément au devis (prix et
                temps), les exécutants sont très agréables et extrêmement
                sérieux dans leur travail et les finitions sont bien réalisées.
              </p>
              <p className="prise-des-mesures"></p>
            </div>
            <div className="rectangle-div14" />
            <div className="div">,,</div>
            <img className="avatar1-1-icon" alt="" src="../avatar1-12@2x.png" />
          </div>
          <img className="fleche-1-icon" alt="" src="../fleche-1@2x.png" />
          <img className="fleche-2-icon" alt="" src="../fleche-2@2x.png" />
        </div>
      </div>
      <Component2 />
      <img className="metre-2-icon" alt="" src="../metre-2@2x.png" />
      <div className="group-div18">
        <div className="group-div19">
          <img className="vector-icon" alt="" src="../vector-1.svg" />
          <img
            className="elec-fin-v5svg-1"
            alt=""
            src="../elec-fin--v5svg-1@2x.png"
          />
        </div>
        <b className="une-quipe-professionelle-ex">
          <span>{`Une équipe `}</span>
          <span className="professionelle-exprimente">{`professionelle & expérimentée `}</span>
          <span>pour vos travaux</span>
        </b>
        <b className="notre-quipe-dispose-de-compt">
          <p className="prise-des-mesures">
            Notre équipe dispose de compétences et de garanties dans
            l’aménagement intérieur , la plomberie et l’électricité.
          </p>
          <p className="prise-des-mesures"></p>
          <p className="prise-des-mesures">
            Nos entreprises partenaires spécialisées dans la pose du sol et la
            peinture peuvent assurer des prestations rapides et garanties en
            parfaite coordination avec notre entreprise et tout en respectant
            les délais fixés au préalable.
          </p>
          <p className="prise-des-mesures"></p>
          <p className="prise-des-mesures">—FRED B.</p>
          <p className="laide-dun-appreil">Carreleur – STB Déco.</p>
        </b>
      </div>
      <div className="group-div20">
        <img className="question2-1-icon" alt="" src="../question2-1@2x.png" />
        <div className="component-1-div">
          <div className="btn-devis-div4">
            <div className="rectangle-div19" />
            <b className="poser-votre-question">Poser votre question !</b>
          </div>
          <b className="une-question-propos-de-votre">
            <span>{`Une question à propos de votre projet?
Obtenez `}</span>
            <span className="professionelle-exprimente">
              un conseil gratuit !
            </span>
          </b>
          <b className="vous-souhaitez-procder-lac">
            <p className="prise-des-mesures">{`Vous souhaitez procéder à l’achat  d’une cuisine mais vous n’êtes pas sûr de votre choix? Vous souhaitez profiter d’une promo  d’électroménagers mais vous n’êtes pas sûr de leurs compatibilités? `}</p>
            <p className="prise-des-mesures">
              Vous souhaitez connaitre les délais des livraisons habituels?
            </p>
            <p className="prise-des-mesures"></p>
          </b>
        </div>
      </div>
      <div className="group-div21">
        <div className="component-1-div1">
          <div className="btn-devis-div5">
            <div className="rectangle-div19" />
            <b className="poser-votre-question">Poser votre question !</b>
          </div>
          <b className="une-question-propos-de-votre">Nos partenaires</b>
          <b className="vous-souhaitez-procder-lac1">
            <p className="prise-des-mesures">{`Vous souhaitez procéder à l’achat  d’une cuisine mais vous n’êtes pas sûr de votre choix? Vous souhaitez profiter d’une promo  d’électroménagers mais vous n’êtes pas sûr de leurs compatibilités? `}</p>
            <p className="prise-des-mesures">
              Vous souhaitez connaitre les délais des livraisons habituels?
            </p>
            <p className="prise-des-mesures"></p>
          </b>
        </div>
        <div className="group-div22">
          <div className="group-div1">
            <img
              className="logo-mma-2017-mma-assurance-cl-icon"
              alt=""
              src="../5265266589-logomma2017mmaassuranceclipart-1@2x.png"
            />
            <img
              className="logo-ffb-1920w-1-icon"
              alt=""
              src="../logoffb1920w-1@2x.png"
            />
            <img className="logo-capeb-1" alt="" src="../logo-capeb-1@2x.png" />
            <img
              className="version-400-19350dd03d57f7931c-icon"
              alt=""
              src="../version-400-19350dd03d57f7931cbd2018082933713961lbnu2m-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="group-div24">
        <img className="pinceau-1-icon" alt="" src="../pinceau-1@2x.png" />
        <div className="group-div25">
          <img className="vector-icon1" alt="" src="../vector-4.svg" />
          <img className="peintres-1-icon" alt="" src="../peintres-1@2x.png" />
        </div>
        <div className="component-1-div2">
          <div className="btn-devis-div5">
            <div className="rectangle-div19" />
            <b className="poser-votre-question">Poser votre question !</b>
          </div>
          <b className="une-question-propos-de-votre">
            <span>{`Des Peintures `}</span>
            <span className="professionelle-exprimente">écologiques</span>
          </b>
          <b className="vous-souhaitez-procder-lac2">
            Nous utilisons des peintures richement pigmentées pour fonctionner
            parfaitement tout en respectant l'environnement. Nos pratiques
            responsables, de nos formules de peinture écologiques à l'eau, à nos
            matériaux recyclables, nous nous engageons à réduire notre impact
            sur la planète sans faire de compromis sur la qualité de rendu.
          </b>
        </div>
      </div>
      <div className="group-div26">
        <img className="vector-icon2" alt="" src="../vector-3.svg" />
        <img
          className="masthead-single-1-icon"
          alt=""
          src="../mastheadsingle-1@2x.png"
        />
      </div>
      <div className="component-3-div">
        <img className="footer-img-1" alt="" src="../footer-img-1@2x.png" />
        <img className="foot-1-icon" alt="" src="../foot-1@2x.png" />
        <div className="group-div27">
          <div className="group-div1">
            <div className="copyright-2022-crer-par-bra">{` Copyright 2022   ©   Créer par BRAVOTRAVO Design.  `}</div>
            <img
              className="bonhomme-1-icon"
              alt=""
              src="../bonhomme-1@2x.png"
            />
          </div>
          <img className="logo2-1-icon" alt="" src="../logo2-1@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default Home;
