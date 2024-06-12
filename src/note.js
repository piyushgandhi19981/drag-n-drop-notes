import { forwardRef } from "react";

const Note = ({ content, initialPos, ...restProps }) => {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: `${initialPos?.y}px`,
          left: `${initialPos?.x}px`,
          border: "1px solid black",
          userSelect: "none",
          width: "200px",
          padding: "10px",
          cursor: "move",
          backgroundColor: "lightyellow",
        }}
        {...restProps}
      >
        🗒️ {content}
      </div>
    </div>
  );
};

export default Note;
