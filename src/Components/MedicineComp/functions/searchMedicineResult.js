import React, { useState, useEffect } from "react";
import Switch from "react-switch";
import { useNavigate } from "react-router-dom";
import "./searchMedicineResult.css";
const SearchMedicineResult = ({ props }) => {
  const navigate = useNavigate();
  const [switchStates, setSwitchStates] = useState([]);

  useEffect(() => {
    if (props.length > 0) {
      const initialStates = props.map(() => ({
        al_b: false,
        al_l: false,
        al_d: false,
      }));
      setSwitchStates(initialStates);
    }
  }, [props]);

  const handleSwitchChange = (index, key) => {
    setSwitchStates((prevState) =>
      prevState.map((state, i) =>
        i === index ? { ...state, [key]: !state[key] } : state
      )
    );
  };

  const handleSave = async (index) => {
    const med = props[index];
    const switchState = switchStates[index];

    const dataToSend = {
      userId: undefined,
      item_sn: med.ITEM_SEQ,
      drug_name: med.ITEM_NAME,
      comp_name: med.ENTP_NAME,
      type: med.ETC_OTC_NAME,
      item_image: med.ITEM_IMAGE,
      class_name: med.CLASS_NAME,
      al_b: switchState.al_b,
      al_l: switchState.al_l,
      al_d: switchState.al_d,
    };
    console.log(dataToSend);
    // navigate("/med/mypage");
  };

  return (
    <div className="search-medicine-result">
      {props.length > 0
        ? props.map((med, index) => (
            <div className="medicine-list-section" key={index}>
              <div className="medicine-search-list">
                <img src={med.ITEM_IMAGE} alt={med.ITEM_NAME} />
                <p>
                  {med.ITEM_NAME} <br /> {med.ENTP_NAME}
                </p>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => handleSwitchChange(index, "al_b")}
                    checked={switchStates[index]?.al_b || false}
                  />
                  <span>아침 복용</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => handleSwitchChange(index, "al_l")}
                    checked={switchStates[index]?.al_l || false}
                  />
                  <span>점심 복용</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => handleSwitchChange(index, "al_d")}
                    checked={switchStates[index]?.al_d || false}
                  />
                  <span>저녁 복용</span>
                </label>
                <div className="medicine-add-btn-box">
                  <button
                    className="medicine-save-btn"
                    onClick={() => handleSave(index)}>
                    추가
                  </button>
                </div>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default SearchMedicineResult;
