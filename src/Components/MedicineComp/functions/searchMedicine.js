import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchMedicineResult from "./searchMedicineResult";
import "./searchMedicine.css";

const SearchMedicine = () => {
  const navigate = useNavigate();

  const [query1, setQuery1] = useState("");
  const [query2, setQuery2] = useState("");

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([]);
  }, []);

  const handleSearch = () => {
    setItems([
      {
        ITEM_SEQ: "200905264",
        ITEM_NAME: "린피스정(아스피린)",
        ENTP_SEQ: "20040011",
        ENTP_NAME: "(주)씨티씨바이오",
        CHART: "분홍색 원형의 장용성필름코팅정",
        ITEM_IMAGE:
          "https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/147426438997500129",
        PRINT_FRONT: "YAS",
        PRINT_BACK: null,
        DRUG_SHAPE: "원형",
        COLOR_CLASS1: "분홍",
        COLOR_CLASS2: null,
        LINE_FRONT: null,
        LINE_BACK: null,
        LENG_LONG: "7",
        LENG_SHORT: "7",
        THICK: "3.4",
        IMG_REGIST_TS: "20120117",
        CLASS_NO: "02190",
        CLASS_NAME: "기타의 순환계용약",
        ETC_OTC_NAME: "일반의약품",
        ITEM_PERMIT_DATE: "20090713",
        FORM_CODE_NAME: "장용성필름코팅정",
        MARK_CODE_FRONT_ANAL: "",
        MARK_CODE_BACK_ANAL: "",
        MARK_CODE_FRONT_IMG: "",
        MARK_CODE_BACK_IMG: "",
        ITEM_ENG_NAME: null,
        CHANGE_DATE: "20170701",
        MARK_CODE_FRONT: null,
        MARK_CODE_BACK: null,
        EDI_CODE: null,
        BIZRNO: "2158151094",
      },
      {
        ITEM_SEQ: "200905198",
        ITEM_NAME: "넥스핀정(아스피린)",
        ENTP_SEQ: "19960030",
        ENTP_NAME: "(주)넥스팜코리아",
        CHART: "분홍색 원형의 장용성 필름코팅정",
        ITEM_IMAGE:
          "https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/148777809115000196",
        PRINT_FRONT: "NKY",
        PRINT_BACK: null,
        DRUG_SHAPE: "원형",
        COLOR_CLASS1: "분홍",
        COLOR_CLASS2: null,
        LINE_FRONT: null,
        LINE_BACK: null,
        LENG_LONG: "7.19",
        LENG_SHORT: "7.19",
        THICK: "4",
        IMG_REGIST_TS: "20100531",
        CLASS_NO: "02190",
        CLASS_NAME: "기타의 순환계용약",
        ETC_OTC_NAME: "일반의약품",
        ITEM_PERMIT_DATE: "20090710",
        FORM_CODE_NAME: "장용성필름코팅정",
        MARK_CODE_FRONT_ANAL: "",
        MARK_CODE_BACK_ANAL: "",
        MARK_CODE_FRONT_IMG: "",
        MARK_CODE_BACK_IMG: "",
        ITEM_ENG_NAME: "Nexphin Tab.",
        CHANGE_DATE: null,
        MARK_CODE_FRONT: null,
        MARK_CODE_BACK: null,
        EDI_CODE: null,
        BIZRNO: "3018125427",
      },
      {
        ITEM_SEQ: "201102749",
        ITEM_NAME: "서클베인장용정75밀리그램(아스피린)",
        ENTP_SEQ: "20090756",
        ENTP_NAME: "일양바이오팜(주)",
        CHART: "흰색의 원형 장용성 필름코팅정",
        ITEM_IMAGE:
          "https://nedrug.mfds.go.kr/pbp/cmn/itemImageDownload/147426549018100044",
        PRINT_FRONT: "ASP75",
        PRINT_BACK: null,
        DRUG_SHAPE: "원형",
        COLOR_CLASS1: "하양",
        COLOR_CLASS2: null,
        LINE_FRONT: null,
        LINE_BACK: null,
        LENG_LONG: "6.9",
        LENG_SHORT: "6.9",
        THICK: "4.6",
        IMG_REGIST_TS: "20110613",
        CLASS_NO: "02190",
        CLASS_NAME: "기타의 순환계용약",
        ETC_OTC_NAME: "일반의약품",
        ITEM_PERMIT_DATE: "20110429",
        FORM_CODE_NAME: "장용성필름코팅정",
        MARK_CODE_FRONT_ANAL: "",
        MARK_CODE_BACK_ANAL: "",
        MARK_CODE_FRONT_IMG: "",
        MARK_CODE_BACK_IMG: "",
        ITEM_ENG_NAME: "Circlevein Enteric Coated Tab 75mg",
        CHANGE_DATE: "20210309",
        MARK_CODE_FRONT: null,
        MARK_CODE_BACK: null,
        EDI_CODE: null,
        BIZRNO: "3048122322",
      },
    ]); // 서버에서 뱉는 더미 데이터 값. (아스피린 검색 값.)
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="add-medication-form">
      <h2>복용약 추가</h2>
      <div className="add-medicine-form-inside">
        <div className="add-medication-input">
          <input
            type="text"
            value={query1}
            onChange={(e) => setQuery1(e.target.value)}
            placeholder="약 이름을 입력하세요"
          />
          <button onClick={handleSearch}>검색</button>
        </div>
        <div className="add-medication-input">
          <input
            type="text"
            value={query2}
            onChange={(e) => setQuery2(e.target.value)}
            placeholder="제조사 이름을 입력하세요. (공백가능)"
          />
          <button onClick={handleRefresh}>초기화</button>
        </div>
      </div>
      <br />

      {items ? <SearchMedicineResult props={items} /> : "Nothing to display"}

      <button
        className="get-back-btn"
        onClick={() => {
          navigate("/med/mypage");
        }}>
        돌아가기
      </button>
    </div>
  );
};

export default SearchMedicine;
