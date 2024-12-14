import React, { useEffect, useState } from "react";
import "./UserBodyInfo.css";

const UserBodyInfo = () => {
  const [height, setHeight] = useState(""); // 3개다 값 설정 필요
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = () => {
    window.location.reload();
  };

  return (
    <div className="user-body-info-section">
      <p>직접 입력</p>
      <div className="user-input-form">
        <div className="input-group">
          <label>
            키
            <input
              type="number"
              name="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="입력"
            />
            <span>cm</span>
          </label>
        </div>

        <div className="input-group">
          <label>
            나이
            <input
              type="number"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="입력"
            />
            <span>세</span>
          </label>
        </div>

        <div className="input-group">
          <label>
            몸무게
            <input
              type="number"
              name="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="입력"
            />
            <span>kg</span>
          </label>
        </div>

        <button onClick={handleSubmit} className="submit-btn">
          수정
        </button>
      </div>
    </div>
  );
};

export default UserBodyInfo;
