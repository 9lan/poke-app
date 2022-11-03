import React from "react";
import { TopBarContainer } from "./styled";
import BackIcon from "../../assets/icons/back.svg";
import CloseIcon from "../../assets/icons/close.svg";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectCurrentStep, selectedPokemon } from "../../slices/pokemon";

type TopBarProps = {
  title?: string;
};

export const TopBar: React.FC<TopBarProps> = ({ title = "Stok Pokémon" }) => {
  const step = useAppSelector(selectCurrentStep);
  const history = useHistory();

  const pokemon = useAppSelector(selectedPokemon);

  const handleBack = () => {
    if (step === "CONFIRM") {
      history.push(`/pokemon/${pokemon?.name}`);
    } else {
      history.push("/");
    }
  };

  const imageSrc = step === "CONFIRM" ? CloseIcon : BackIcon;

  return (
    <TopBarContainer>
      <div>
        <img onClick={handleBack} id="icon" src={imageSrc} alt="Back Icon" />
        <div id="title">{title}</div>
      </div>
    </TopBarContainer>
  );
};
