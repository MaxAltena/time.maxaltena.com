import React from "react";

const Mountains = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1400 490"
      className="Mountains"
    >
      <def>
        <g id="mountain">
          <path
            fill="#8BAA81"
            d="M1400 370V490H0V370l1 1 .7 1 6.4 7.8 19.5 24 3.6 4.5.7-.7 4.2-5.2 24.5-30.6c14.6-18 42-18 56.6 0l55.2 68.4 22.8 28.3 48.5-60.2c14.6-18 42-18 56.6 0l21.8 27 51-63.4c14.6-18.2 42-18.2 56.6 0l55 68.3 26-32.3c14.7-18 42.2-18 56.7 0l35 43.5 45.5-52.3 37-42.6c18.6-21.4 53.8-21.4 72.5 0l37.3 43 63.4 73 19.4-24c14.7-18.2 42.2-18.2 56.7 0l29.2 36.2 49-61c14.7-18.2 42.2-18.2 56.7 0l40 49.5 52.6-65.3c14.6-18 42-18 56.6 0l48 59.5.8 1 27-33.2 51-63.3c14.3-17.5 40.3-18 55.2-2z"
          />
          <path
            fill="#EDEDF4"
            d="M796 400.3c-1.7.5-3.3 1.5-4.5 3-3.8 4.4-11.7 4.4-15.5 0-3.8-4.6-11.7-4.6-15.5 0-3.8 4.4-11.7 4.4-15.5 0-3.8-4.6-11.7-4.6-15.5 0-3.8 4.4-11.7 4.4-15.5 0-3.8-4.6-11.7-4.6-15.5 0-3.8 4.4-11.7 4.4-15.5 0-3.8-4.6-11.7-4.6-15.5 0-3.8 4.4-11.7 4.4-15.5 0-1.3-1.6-3-2.6-5-3l41.5-51.5c17-21.2 49.4-21.2 66.5 0l41 51.5z"
          />
        </g>
      </def>
      <g className="loop">
        <g className="mountains" data-svg-origin="0 332.89996337890625">
          <use xlinkHref="#mountain" />
          <use xlinkHref="#mountain" x="1399.8" />
        </g>
      </g>
    </svg>
  );
};

export default Mountains;
