import { FunctionComponent, useCallback } from "react";
import "antd/dist/antd.css";
import { TextField, Button as MuiButton, Icon } from "@mui/material";
import { Input } from "antd";
import { Input as ChakraInput } from "@chakra-ui/react";
import "./Devis.css";

const Devis: FunctionComponent = () => {
  const onLogoImageClick = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  return (
    <div className="devis-div">
      <div className="menu-div7">
        <div className="menu-div8">
          <b className="accueil-b5">Accueil</b>
        </div>
        <div className="menu-div9">
          <b className="accueil-b5">Services</b>
        </div>
        <div className="menu-div10">
          <b className="accueil-b5">Devis</b>
        </div>
        <div className="menu-div11">
          <b className="accueil-b5">Contact</b>
        </div>
        <div className="menu-div12">
          <b className="accueil-b5">Témoignages</b>
        </div>
        <div className="menu-div13">
          <b className="accueil-b5">A propos</b>
        </div>
      </div>
      <img
        className="logo-icon1"
        alt=""
        src="../logo@2x.png"
        onClick={onLogoImageClick}
      />
      <b className="besoin-dun-devis-estimatif">
        <p className="besoin-p">{`Besoin `}</p>
        <p className="besoin-p">{`d’un devis `}</p>
        <p className="estimatif-p">estimatif?</p>
      </b>
      <div className="group-div31">
        <div className="group-div32">
          <div className="rectangle-div23" />
          <div className="group-div33">
            <div className="group-div34">
              <div className="formtextfieldmandatory-div">
                <div className="textfield-div">
                  <div className="rectangle-div24" />
                  <div className="what-is-your-name">Ville *</div>
                </div>
              </div>
              <div className="formtextfieldmandatory-div1">
                <div className="textfield-div">
                  <div className="rectangle-div24" />
                  <div className="what-is-your-name1">Téléphone *</div>
                </div>
              </div>
              <div className="formtextfieldmandatory-div2">
                <div className="textfield-div">
                  <div className="rectangle-div24" />
                  <div className="what-is-your-name">Adresse mail *</div>
                </div>
              </div>
              <div className="formtextfieldmandatory-div3">
                <div className="textfield-div">
                  <div className="rectangle-div24" />
                  <input className="what-is-your-name3" type="text" />
                </div>
              </div>
              <div className="formtextfieldmandatory-div4">
                <div className="textfield-div">
                  <div className="rectangle-div24" />
                  <div className="what-is-your-name">Nom *</div>
                </div>
              </div>
              <div className="formtextfieldmandatory-div5">
                <div className="textfield-div">
                  <div className="rectangle-div24" />
                  <div className="what-is-your-name">Prénom *</div>
                </div>
              </div>
              <TextField
                className="formtextfieldmandatory"
                sx={{ width: 389 }}
                variant="standard"
                multiline
                label="Code postal *"
              />
              <Input
                className="formtextarea-input"
                type="text"
                style={{ width: "804px" }}
                defaultValue="bo"
                size="middle"
                placeholder="Décrivez ici votre projet.."
                bordered={false}
              />
              <div className="formtextfield-div">
                <div className="textfield-div">
                  <div className="rectangle-div24" />
                  <div className="what-is-your-name1">Type de travaux</div>
                </div>
              </div>
            </div>
            <div className="aenean-sit-amet-magn">
              Transmettez-nous votre projet et nous vous enverrons un devis
              rapidement!
            </div>
            <div className="btn-devis-div7">
              <div className="rectangle-div31" />
              <b className="poser-votre-question3">Poser votre question !</b>
            </div>
            <div className="group-div35">
              <div className="group-div36">
                <div className="what-is-your-name7">
                  Aucun fichier n’a été sélectionné
                </div>
                <div className="btn-devis-div8">
                  <div className="rectangle-div32" />
                  <b className="choisir-un-fichier">Choisir un fichier</b>
                </div>
              </div>
              <div className="group-div37">
                <div className="what-is-your-name8">
                  Aucun fichier n’a été sélectionné
                </div>
                <div className="btn-devis-div8">
                  <div className="rectangle-div32" />
                  <b className="choisir-un-fichier">Choisir un fichier</b>
                </div>
              </div>
              <div className="group-div38">
                <div className="what-is-your-name7">
                  Aucun fichier n’a été sélectionné
                </div>
                <div className="btn-devis-div8">
                  <div className="rectangle-div32" />
                  <b className="choisir-un-fichier">Choisir un fichier</b>
                </div>
              </div>
              <div className="group-div39">
                <div className="what-is-your-name7">
                  Aucun fichier n’a été sélectionné
                </div>
                <div className="btn-devis-div8">
                  <div className="rectangle-div32" />
                  <b className="choisir-un-fichier">Choisir un fichier</b>
                </div>
              </div>
              <div className="group-div40">
                <div className="what-is-your-name7">
                  Aucun fichier n’a été sélectionné
                </div>
                <div className="btn-devis-div8">
                  <div className="rectangle-div32" />
                  <b className="choisir-un-fichier">Choisir un fichier</b>
                </div>
              </div>
              <div className="group-div41">
                <div className="what-is-your-name7">
                  Aucun fichier n’a été sélectionné
                </div>
                <div className="btn-devis-div8">
                  <div className="rectangle-div32" />
                  <b className="choisir-un-fichier">Choisir un fichier</b>
                </div>
              </div>
            </div>
            <ChakraInput
              className="inputflushed-chakrainput"
              variant="flushed"
              width="372px"
              placeholder="Input"
              w="372px"
            />
          </div>
          <MuiButton
            className="buttoncontained-text-and-ico"
            variant="contained"
            color="primary"
            endIcon={<Icon>arrow_forward_sharp</Icon>}
          >
            Button
          </MuiButton>
        </div>
      </div>
      <img className="devisc-1-icon" alt="" src="../devisc-1@2x.png" />
      <img className="flech-rond-1" alt="" src="../flech-rond-1@2x.png" />
      <img className="niveau-1-icon" alt="" src="../niveau-1@2x.png" />
      <img className="casque-2-icon" alt="" src="../casque-2@2x.png" />
      <ChakraInput
        className="inputflushed-chakrainput1"
        variant="flushed"
        width="320px"
        placeholder="Input"
        w="320px"
      />
    </div>
  );
};

export default Devis;
