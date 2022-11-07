import { FunctionComponent, useCallback } from "react";
import "./Conception.css";

const Conception: FunctionComponent = () => {
  const onLogoImageClick = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  return (
    <div className="conception-div">
      <div className="menu-div14">
        <div className="menu-div15">
          <b className="accueil-b11">Accueil</b>
        </div>
        <div className="menu-div16">
          <b className="accueil-b11">Services</b>
        </div>
        <div className="menu-div17">
          <b className="accueil-b11">Devis</b>
        </div>
        <div className="menu-div18">
          <b className="accueil-b11">Contact</b>
        </div>
        <div className="menu-div19">
          <b className="accueil-b11">Témoignages</b>
        </div>
        <div className="menu-div20">
          <b className="accueil-b11">A propos</b>
        </div>
      </div>
      <img
        className="logo-icon2"
        alt=""
        src="../logo@2x.png"
        onClick={onLogoImageClick}
      />
      <div className="group-div42">
        <div className="group-div43">
          <b className="mtrage-travaux-annexes-ins">{`Métrage, travaux annexes & installation`}</b>
          <div className="group-div44">
            <div className="group-div45">
              <div className="group-div45">
                <div className="group-div46">
                  <div className="group-div47">
                    <div className="rectangle-div38" />
                    <div className="rectangle-div39" />
                    <div className="rectangle-div40" />
                    <b className="modlisation-3d-b">Modélisation 3D</b>
                    <b className="vous-avez-envie-de-visualiser">
                      Vous avez envie de visualiser votre futur cuisine, salle
                      de bain ou dressing mais vous avez du mal au vous
                      projeter? Le service conception à domicile est fait pour
                      vous!.
                    </b>
                  </div>
                </div>
                <img className="aa-1-icon3" alt="" src="../aa-13@2x.png" />
              </div>
            </div>
            <div className="group-div48">
              <div className="group-c-div1">
                <div className="group-c-div1">
                  <div className="rectangle-div38" />
                  <div className="rectangle-div42" />
                  <div className="rectangle-div43" />
                  <b className="gagner-du-temps">Gagner du temps!</b>
                  <b className="vous-avez-envie-de-visualiser">
                    Nous nous chargerons de préparer votre bon de commande avec
                    une liste complète est précise de tous les articles à
                    commander, ainsi, vous gagnerez en temps et en argent!.
                  </b>
                  <img className="aa-1-icon4" alt="" src="../aa-14@2x.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-div50">
          <div className="group-a-div1">
            <div className="group-div51">
              <div className="rectangle-div44" />
              <div className="rectangle-div45" />
              <div className="rectangle-div46" />
              <b className="prise-des-mesures1">Prise des mesures</b>
              <b className="prise-de-mesures-de-la-pice">
                Prise de mesures de la pièce à l’aide d’un appareil au laser en
                trois dimensions.
              </b>
            </div>
          </div>
          <img className="aa-1-icon5" alt="" src="../aa-15@2x.png" />
        </div>
      </div>
      <img className="casque-1-icon" alt="" src="../casque-1@2x.png" />
      <div className="group-div52">
        <div className="rectangle-div47" />
        <div className="group-div53">
          <div className="copyright-2022-crer-par-bra2">{` Copyright 2022   ©   Créer par BRAVOTRAVO.  `}</div>
          <img
            className="bonhomme-1-icon2"
            alt=""
            src="../bonhomme-11@2x.png"
          />
        </div>
        <img className="logo2-1-icon2" alt="" src="../logo2-11@2x.png" />
      </div>
    </div>
  );
};

export default Conception;
