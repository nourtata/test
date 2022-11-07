import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Accueil.css";

const Accueil: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAccueilText2Click = useCallback(() => {
    navigate("/devis");
  }, [navigate]);

  return (
    <b className="accueil-b17" onClick={onAccueilText2Click}>
      Devis
    </b>
  );
};

export default Accueil;
