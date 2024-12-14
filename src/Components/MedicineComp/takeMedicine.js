import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./takeMedicine.css";
import MedicationList from "./functions/medicationList";
import AlarmManager from "./functions/alarmManger";
import AddIcon from "@mui/icons-material/Add";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { useNavigate } from "react-router-dom";

const TakeMedicine = () => {
  const navigate = useNavigate();

  const today = new Date();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const formattedDate = `${today.getMonth() + 1}. ${today.getDate()} (${
    week[today.getDay()]
  }) `;

  const [medications, setMedications] = useState(
    [
      {
        drug_name: "코데날정",
        comp_name: "삼아제약(주)",
        type: "전문의약품",
        class_name: "진해거담제",
        item_image:
          "https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/1O1A3H02k0k",
        al_b: 0,
        al_l: 0,
        al_d: 1,
      },
      {
        drug_name: "세토펜8시간이알서방정(아세트아미노펜)",
        comp_name: "삼아제약(주)",
        type: "일반의약품",
        class_name: "해열.진통.소염제",
        item_image:
          "https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/1Oikd3yeZ51",
        al_b: 1,
        al_l: 0,
        al_d: 1,
      },
      {
        drug_name: "경보세프포독심프록세틸정(수출명:DAEZIM Tab.)",
        comp_name: "(주)경보제약",
        type: "전문의약품",
        class_name: "주로 그람양성, 음성균에 작용하는 것",
        item_image:
          "https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/147428043395900024",
        al_b: 1,
        al_l: 1,
        al_d: 1,
      },
      {
        drug_name: "베아파모정10밀리그램(파모티딘)",
        comp_name: "대웅바이오(주)",
        type: "일반의약품",
        class_name: "소화성궤양용제",
        item_image:
          "https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/1NVEnjhkQ4O",
        al_b: 0,
        al_l: 1,
        al_d: 0,
      },
      {
        drug_name: "펠프스정(펠루비프로펜)",
        comp_name: "영진약품(주)",
        type: "전문의약품",
        class_name: "해열.진통.소염제",
        item_image:
          "https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/1NeFqpW1h2g",
        al_b: 1,
        al_l: 1,
        al_d: 1,
      },
    ]
    // 더미 데이터 (실제 서버에서 뱉는값 넣어둠)
  );

  const [selectedTime, setSelectedTime] = useState("아침");

  const handelAddMedication = () => {
    navigate("/med/add");
  };

  const handelRemoveMedication = () => {
    // Edit으로 수정 - 미완
  };

  const filteredMedications = medications.filter((medication) => {
    if (selectedTime === "아침" && medication.al_b === 1) return true;
    if (selectedTime === "점심" && medication.al_l === 1) return true;
    if (selectedTime === "저녁" && medication.al_d === 1) return true;
    return false;
  });

  return (
    <div className="take-medicine-page">
      <div className="today-take-medicine-list">
        <h2 className="today-date">
          {formattedDate} 오늘{" "}
          <KeyboardArrowDownIcon className="today-date-underArrow" />
        </h2>
        {["아침", "점심", "저녁"].map((time) => (
          <button
            key={time}
            onClick={() => setSelectedTime(time)}
            className={`selectedTime-btn 
                                ${selectedTime === time ? "active" : ""}`}>
            {time}
          </button>
        ))}
      </div>
      <div>
        <MedicationList medications={filteredMedications} />
      </div>
      <div className="add-medication-form">
        <div className="medication-btn-form">
          <button className="add-medication-btn" onClick={handelAddMedication}>
            <AddIcon />
          </button>
          <button
            className="edit-medication-btn"
            onClick={handelRemoveMedication}>
            <EditRoundedIcon />
          </button>
        </div>
      </div>
      <div>
        <AlarmManager />
      </div>
    </div>
  );
};

export default TakeMedicine;
