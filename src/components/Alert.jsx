// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Alert(props) {
  let buttonColor;
  let icon;
  if (props.severity === "error") {
    buttonColor = "#F9C8C8";
    icon = <img src="src/assets/frown.svg" alt="error icon" />;
  } else if (props.severity === "warning") {
    buttonColor = "#F9D9C8";
    icon = <img src="src/assets/alert-triangle.svg" alt="warning icon" />;
  } else if (props.severity === "info") {
    buttonColor = "#F9EBC8";
    icon = <img src="src/assets/alert-circle.svg" alt="info icon" />;
  } else if (props.severity === "success") {
    buttonColor = "#CEF7CD";
    icon = <img src="src/assets/check-circle.svg" alt="success icon" />;
  }
  return (
    <div
      css={css`
        display: flex;
        justify-content: start;
        align-items: center;
        width: 650px;
        height: 76px;
        background-color: ${buttonColor};
        border-radius: 10px;
        padding-left: 20px;
        color: #444444;
        font-family: "Kanit", sans-serif;
        font-size: 20px;
        font-weight: 700;
        margin: 10px;
        line-height: normal;
        font-style: normal;
      `}
    >
      <div
        css={css`
          margin-right: 20px;
        `}
      >
        {icon}
      </div>
      {props.message}
    </div>
  );
}

export default Alert;
