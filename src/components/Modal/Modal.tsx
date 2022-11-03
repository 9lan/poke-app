import React from "react";
import { Button } from "../Button/Button";
import { ModalContainer, ModalSection } from "./styled";

export interface IModalProps {
  onClose: () => void;
  onSave: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<IModalProps> = ({ onClose, onSave, children }) => {
  return (
    <ModalContainer>
      <ModalSection>
        <div id="modal_info">
          <h3>Update stok</h3>
          <p>Masukkan jumlah stok yang tersedia di rak saat ini.</p>
        </div>
        {children}
        <div id="modal_button">
          <Button label="Simpan" color="primary" onClick={onSave} />
          <Button label="Batal" onClick={onClose} />
        </div>
      </ModalSection>
    </ModalContainer>
  );
};
