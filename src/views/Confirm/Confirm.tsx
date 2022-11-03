import React from "react";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import EditIcon from "../../assets/icons/edit.svg";

import { Button } from "../../components/Button/Button";
import { Modal } from "../../components/Modal/Modal";
import { ModalInput } from "../../components/Modal/styled";
import { TopBar } from "../../components/TopBar/TopBar";
import {
  addHistory,
  selectCurrentStep,
  selectedPokemon,
} from "../../slices/pokemon";
import {
  DetailContainer,
  DetailRiwayat,
  DetailRiwayatTitle,
  DetailStok,
  DetailStokInfo,
  DetailStokTitle,
  DetailTitle,
} from "../Detail/styled";
import {
  ConfirmContentItem,
  ConfirmDividerBold,
  ConfirmDividerThin,
  ConfirmFlex,
  ConfirmTextArea,
  ConfirmTitle,
  ConfirmTotalFlex,
} from "./styled";

export const Confirm: React.FC = () => {
  const pokemon = useAppSelector(selectedPokemon);
  const step = useAppSelector(selectCurrentStep);

  const [isOpen, setIsOpen] = React.useState(false);
  const [tempData, setTempData] = React.useState({
    pcs: pokemon?.history[0].pcs,
    lusin: pokemon?.history[0].lusin,
    stock: pokemon?.history[0].stock,
    notes: pokemon?.history[0].notes,
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTempData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    setTempData((prev: any) => ({
      ...prev,
      stock: Number(tempData.pcs) * 1 + Number(tempData.lusin) * 12,
    }));
  }, [tempData.pcs, tempData.lusin]);

  const dispatch = useAppDispatch();

  const onSaveHistory = () => {
    dispatch(
      addHistory({
        name: pokemon?.name,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        stock: tempData.stock,
        notes: tempData.notes,
        headline: "Update stok",
      })
    );
  };

  const history = useHistory();

  React.useEffect(() => {
    if (step === "DETAIL") {
      history.push(`/pokemon/${pokemon?.name}`);
    }
  }, [step]);

  return (
    <>
      <TopBar title="Pikachu" />
      <DetailContainer>
        <DetailTitle>Konfirmasi Update Stok</DetailTitle>
        <DetailStok>
          <DetailStokTitle>Selisih</DetailStokTitle>
          <DetailStokInfo>+{tempData.stock || 0} pcs</DetailStokInfo>
        </DetailStok>
        <ConfirmFlex>
          <div>
            <DetailStokTitle>Di sistem</DetailStokTitle>
            <div>0 pcs</div>
          </div>
          <div>
            <DetailStokTitle>Hasil update stok</DetailStokTitle>
            <div>{tempData.stock || 0} pcs</div>
          </div>
        </ConfirmFlex>
        <DetailRiwayat>
          <DetailRiwayatTitle>Detail stok opname</DetailRiwayatTitle>
          <div>
            <ConfirmFlex>
              <ConfirmTitle>Keterangan</ConfirmTitle>
              <ConfirmTitle>Jumlah</ConfirmTitle>
            </ConfirmFlex>
            <ConfirmDividerBold />
            <ConfirmFlex>
              <ConfirmContentItem>
                <div>Hasil update stok</div>
                <div>
                  {tempData.pcs || 0} pcs, {tempData.lusin || 0} lusin (12s)
                </div>
              </ConfirmContentItem>
              <ConfirmTotalFlex>
                <div>{tempData.stock || 0} pcs</div>
                <img
                  onClick={handleOpenModal}
                  id="icon"
                  src={EditIcon}
                  alt="Edit Icon"
                />
              </ConfirmTotalFlex>
            </ConfirmFlex>
            <ConfirmDividerThin />
            <ConfirmFlex>
              <ConfirmTitle>Total hasil stok opname</ConfirmTitle>
              <ConfirmTitle>{tempData.stock || 0} pcs</ConfirmTitle>
            </ConfirmFlex>
          </div>
        </DetailRiwayat>
        <DetailRiwayat>
          <DetailRiwayatTitle>Catatan</DetailRiwayatTitle>
          <ConfirmTextArea
            name="notes"
            value={tempData.notes}
            placeholder="Contoh: stok awal"
            onChange={onChangeHandler}
          />
          <Button label="Simpan" color="primary" onClick={onSaveHistory} />
        </DetailRiwayat>
      </DetailContainer>
      {isOpen && (
        <ModalUpdate
          tempData={tempData}
          onChangeHandler={onChangeHandler}
          handleOpenModal={handleOpenModal}
        />
      )}
    </>
  );
};

const ModalUpdate = ({ tempData, onChangeHandler, handleOpenModal }: any) => {
  const totalPcs = Number(tempData.pcs) * 1;
  const totalLusin = Number(tempData.lusin) * 12;
  const totalStock = totalPcs + totalLusin;

  return (
    <Modal onSave={handleOpenModal} onClose={handleOpenModal}>
      <ModalInput>
        <div id="modal_input_head">
          <div>Kemasan</div>
          <div>
            <div>Jumlah</div>
            <div>Stok</div>
          </div>
        </div>
        <div id="modal_input_desc">
          <div>Pcs</div>
          <div id="modal_input_input">
            <div>
              <p>1 x</p>
              <input
                name="pcs"
                type="number"
                value={tempData.pcs}
                onChange={onChangeHandler}
              />
              <p> =</p>
            </div>
            <div>{totalPcs}</div>
          </div>
        </div>
        <div id="modal_input_desc">
          <div>Lusin</div>
          <div id="modal_input_input">
            <div>
              <p>12 x</p>
              <input
                name="lusin"
                type="number"
                value={tempData.lusin}
                onChange={onChangeHandler}
              />
              <p> =</p>
            </div>
            <div>{totalLusin}</div>
          </div>
        </div>
        <div id="modal_count">
          <div>
            Total stok <span>(dalam pcs)</span>
          </div>
          <div>{totalStock || 0}</div>
        </div>
      </ModalInput>
    </Modal>
  );
};
