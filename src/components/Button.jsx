/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  let buttonColor;
  if (props.type === "Primary") {
    buttonColor = "#074EE8";
  } else if (props.type === "Secondary") {
    buttonColor = "#07A4E8";
  }
  return (
    <button
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${buttonColor};
        font-family: "Sarabun", sans-serif;
        font-size: 16px;
        font-weight: 400;
        fonst-style: normal;
        line-height: 18px;
        color: #ffffff;
        width: 170px;
        height: 50px;
        margin-bottom: 40px;
      `}
    >
      {props.buttonText}
    </button>
  );
}

export default Button;
