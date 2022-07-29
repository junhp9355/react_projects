import React from "react";

const TimeConverter = ({ amount, active, changeActive, reset, onChange }) => {
  return (
    <div>
      <div>Time Converter</div>
      <div>
        Minutes{" "}
        <input
          placeholder="Minutes"
          value={active ? amount : amount * 60}
          type="number"
          onChange={onChange}
          disabled={!active}
        ></input>
        <div>
          Hours{" "}
          <input
            type="number"
            placeholder="Hours"
            value={active ? Math.floor(amount / 60) : amount}
            disabled={active}
            onChange={onChange}
          ></input>
        </div>
        <button onClick={reset}>reset</button>
        <button onClick={changeActive}>active toggle</button>
      </div>
    </div>
  );
};

export default TimeConverter;
