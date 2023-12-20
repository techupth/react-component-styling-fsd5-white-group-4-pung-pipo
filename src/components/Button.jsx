// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Button(props) {
  if (props.type === "Primary") {
    return (
      <button
        css={css`
          background-color: blue;
          color: white;
          width: 200px;
          height: 50px;
          text: Button;
          margin-right: 10px;
        `}
      >
        {props.text}
      </button>
    );
  } else if (props.type === "Secondary") {
    return (
      <button
        css={css`
          background-color: #03a9f4;
          color: white;
          width: 200px;
          height: 50px;
          text: Button;
        `}
      >
        {props.text}
      </button>
    );
  }
}
