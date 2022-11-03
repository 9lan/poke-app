import React from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  postTempHistory,
  selectCurrentStep,
  selectedPokemon,
  selectUpdatedPokemon,
} from "../../slices/pokemon";
import { capitalizeFirstLetter } from "../../app/utils/capitalizeFirstLetter";
import {
  DetailContainer,
  DetailRiwayat,
  DetailRiwayatBody,
  DetailRiwayatInfo,
  DetailRiwayatTable,
  DetailRiwayatTableHead,
  DetailRiwayatTitle,
  DetailStok,
  DetailStokInfo,
  DetailStokTitle,
  DetailTitle,
} from "./styled";

import { TopBar } from "../../components/TopBar/TopBar";
import { Button } from "../../components/Button/Button";
import { useHistory } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal";
import { ModalInput } from "../../components/Modal/styled";
import { useSelector } from "react-redux";

export const Detail: React.FC = () => {
  const history = useHistory();

  const pokemon = useAppSelector(selectedPokemon);
  const updatedPokemon = useSelector(selectUpdatedPokemon);

  const [isOpen, setIsOpen] = React.useState(false);

  const [tempData, setTempData] = React.useState({
    ...pokemon,
    pcs: 0,
    lusin: 0,
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTempData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  const step = useAppSelector(selectCurrentStep);

  React.useEffect(() => {
    if (step === "CONFIRM") {
      handleOpenModal();
      history.push(`/pokemon/${pokemon?.name}/konfirmasi`);
    }
  }, [step]);

  const newDt = updatedPokemon.find((item) => item.name === pokemon?.name);

  return (
    <>
      <TopBar />
      <DetailContainer>
        <DetailTitle>{newDt && capitalizeFirstLetter(newDt.name)}</DetailTitle>
        <Button label="Update stok" onClick={handleOpenModal} />
        <DetailStok>
          <DetailStokTitle>Sisa stok</DetailStokTitle>
          <DetailStokInfo>
            {newDt && newDt.history.reduce((a: any, b: any) => a + b.stock, 0)}{" "}
            pcs
          </DetailStokInfo>
        </DetailStok>
        <DetailRiwayat>
          <DetailRiwayatTitle>Riwayat stok</DetailRiwayatTitle>
          <DetailRiwayatBody>Satuan stok dalam pcs</DetailRiwayatBody>

          <DetailRiwayatTable>
            {newDt?.history.map((item, index) => {
              return (
                <div key={index}>
                  <DetailRiwayatTableHead>
                    <div id="date">{item.date}</div>
                    <div id="info">
                      <div id="jumlah">Jmlh</div>
                      <div id="stok">Stok</div>
                    </div>
                  </DetailRiwayatTableHead>
                  <DetailRiwayatInfo>
                    <div id="keterangan">
                      <div id="riwayat_time">{item.time}</div>
                      <div id="riwayat_title">
                        {item.stock > 0 ? "Update stok" : "Stok Awal"}
                      </div>
                      <div id="riwayat_notes">
                        {item.notes !== "" ? `"${item.notes}"` : null}
                      </div>
                    </div>
                    <div id="riwayat">
                      <div id="riwayat_jumlah">{item.stock}</div>
                      <div id="riwayat_stok">{item.stock}</div>
                    </div>
                  </DetailRiwayatInfo>
                </div>
              );
            })}
          </DetailRiwayatTable>
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

  const dispatch = useAppDispatch();

  const handleOnSave = () => {
    dispatch(
      postTempHistory({
        name: tempData.name,
        history: {
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
          stock: totalStock,
          notes: "",
          pcs: tempData.pcs,
          lusin: tempData.lusin,
          totalPcs: totalPcs,
          totalLusin: totalLusin,
        },
      })
    );
  };
  return (
    <Modal onSave={handleOnSave} onClose={handleOpenModal}>
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
          <div>{totalStock ?? 0}</div>
        </div>
      </ModalInput>
    </Modal>
  );
};
