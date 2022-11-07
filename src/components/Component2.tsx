import { FunctionComponent } from "react";
import "./Component2.css";

const Component2: FunctionComponent = () => {
  return (
    <div className="component-2-div">
      <b className="vous-avez-un-projet-de-travaux">
        <p className="vous-avez-un">{`Vous avez un projet de travaux de rénovation d’intérieur ? `}</p>
        <p className="vous-avez-un">{`Vous souhaitez les confier à des artisans du bâtiment qualifiés ? `}</p>
        <p className="vous-avez-un">{`Vous avez besoin d’un accompagnement de proximité, sûr et sans surprise ? `}</p>
        <p className="nous-sommes-prsents">
          Nous sommes présents pour réaliser vos travaux de rénovation.
        </p>
      </b>
      <div className="bloc1-div">
        <img className="b-g-icon" alt="" src="../b-g.svg" />
        <div className="btn-devis-div14">
          <img className="rectangle-icon" alt="" src="../rectangle-4.svg" />
          <b className="demander-un-devis">Demander un devis</b>
        </div>
        <img className="deco-icon" alt="" src="../deco.svg" />
        <b className="rnovation-b"> rénovation</b>
        <b className="pour-vos-travaux-de">
          <p className="vous-avez-un">pour vos travaux</p>
          <p className="nous-sommes-prsents">{`de `}</p>
        </b>
        <b className="les-meilleurs-services">les meilleurs services</b>
        <img className="img-bisness-icon" alt="" src="../img-bisness.svg" />
      </div>
      <img className="trait-1-icon" alt="" src="../trait-1@2x.png" />
      <div className="group-div54">
        <div className="star-div" />
        <div className="star-div1" />
        <div className="star-div2" />
        <div className="star-div3" />
      </div>
      <img className="rouleau-1-icon" alt="" src="../rouleau-1@2x.png" />
    </div>
  );
};

export default Component2;
