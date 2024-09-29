import React, { useState, useEffect } from "react";
import "./HW4MainPage.css";

const ROWS = 10;
const COLS = 10;
const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function HW4MainPage() {
  const [spreadsheet, setSpreadsheet] = useState([]);
  const [cellStatus, setCellStatus] = useState("");

  useEffect(() => {
    initSpreadsheet();
  }, []);

  const initSpreadsheet = () => {
    const newSpreadsheet = [];
    for (let i = 0; i < ROWS; i++) {
      let spreadsheetRow = [];
      for (let j = 0; j < COLS; j++) {
        let cellData = "";
        let isHeader = false;
        let disabled = false;

        // 첫 번째 컬럼에 숫자 넣기
        if (j === 0) {
          if (i !== 0) {
            cellData = i;
          }
          isHeader = true;
          disabled = true;
        }

        // 첫 번째 행에 알파벳 넣기
        if (i === 0 && j > 0) {
          cellData = alphabets[j - 1];
          isHeader = true;
          disabled = true;
        }

        const rowName = i;
        const columnName = alphabets[j - 1];

        const cell = {
          isHeader,
          disabled,
          data: cellData,
          row: i,
          column: j,
          rowName,
          columnName,
          active: false,
        };
        spreadsheetRow.push(cell);
      }
      newSpreadsheet.push(spreadsheetRow);
    }
    setSpreadsheet(newSpreadsheet);
  };

  const handleCellClick = (cell) => {
    clearHeaderActiveStates();
    const updatedSpreadsheet = [...spreadsheet];
    const columnHeader = updatedSpreadsheet[0][cell.column];
    const rowHeader = updatedSpreadsheet[cell.row][0];

    columnHeader.active = true;
    rowHeader.active = true;

    setSpreadsheet(updatedSpreadsheet);
    setCellStatus(`${cell.columnName}${cell.rowName}`);
  };

  const handleOnChange = (data, cell) => {
    const updatedSpreadsheet = [...spreadsheet];
    updatedSpreadsheet[cell.row][cell.column].data = data;
    setSpreadsheet(updatedSpreadsheet);
  };

  const handleBlur = (cell) => {
    const updatedSpreadsheet = [...spreadsheet];
    const columnHeader = updatedSpreadsheet[0][cell.column];
    const rowHeader = updatedSpreadsheet[cell.row][0];

    // Blur 또는 Mouse Out 시 active 상태를 false로 설정
    columnHeader.active = false;
    rowHeader.active = false;

    setSpreadsheet(updatedSpreadsheet);
  };

  const clearHeaderActiveStates = () => {
    const updatedSpreadsheet = spreadsheet.map((row) =>
      row.map((cell) => ({ ...cell, active: false })),
    );
    setSpreadsheet(updatedSpreadsheet);
  };

  const exportSpreadsheet = () => {
    let csv = "";
    for (let i = 0; i < spreadsheet.length; i++) {
      if (i === 0) continue;
      csv +=
        spreadsheet[i]
          .filter((item) => !item.isHeader)
          .map((item) => item.data)
          .join(",") + "\r\n";
    }

    const csvObj = new Blob([csv], { type: "text/csv" });
    const csvUrl = URL.createObjectURL(csvObj);
    const a = document.createElement("a");
    a.href = csvUrl;
    a.download = "spreadsheet.csv";
    a.click();
  };

  const createCellEl = (cell) => {
    return (
      <input
        key={`${cell.row}-${cell.column}`}
        className={`cell ${cell.isHeader ? "header" : ""} ${
          cell.active ? "active" : ""
        }`}
        value={cell.data}
        onChange={(e) => handleOnChange(e.target.value, cell)}
        disabled={cell.disabled}
        onClick={() => handleCellClick(cell)}
        onBlur={() => handleBlur(cell)} // 포커스 아웃 이벤트 핸들러
      />
    );
  };

  const drawSheet = () => {
    return spreadsheet.map((row, rowIndex) => (
      <div key={rowIndex} className="cell-row">
        {row.map((cell) => createCellEl(cell))}
      </div>
    ));
  };

  return (
    <div>
      <button id="export-btn" onClick={exportSpreadsheet}>
        Export Spreadsheet
      </button>
      <div>
        Cell: <span id="cell-status">{cellStatus}</span>
      </div>
      <div id="spreadsheet-container">{drawSheet()}</div>
    </div>
  );
}

export default HW4MainPage;
