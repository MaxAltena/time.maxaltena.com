import React from "react";

const Clouds = () => {
  return (
    <svg className="Clouds">
      <def>
        <g id="cloud">
          <path
            fill="#84CEE1"
            d="M1403.4,96.6V201H-1V96l1-1l7-6c48.8-39.5,115.4-64,188.7-64c68.3,0,130.8,21.2,178.4,56c14,10.4,27,21.8,38,34.3c15.2-4,31.2-6,47.6-6c37,0,71.5,10.7,100,29.3c31-18.6,68-29.4,108-29.4c28,0,54.4,5.3,78.3,14.7c30-48.4,83-80.4,143.3-80.4c36,0,69,11.3,96.5,30.6C1038,28,1107.2,0,1183,0C1271,0,1349.6,37.3,1403.4,96.6z"
          />
        </g>
      </def>
      <g className="loop">
        <g className="clouds" data-svg-origin="0 332.89996337890625">
          <use xlinkHref="#cloud" />
          <use xlinkHref="#cloud" x="1400" />
        </g>
      </g>
    </svg>
  );
};

export default Clouds;
