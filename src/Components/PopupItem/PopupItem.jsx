import React from "react";
import "./PopupItem.css";
import { AiOutlineClose } from "react-icons/ai";

const PopupItem = ({ text, handleRemoveClick, id }) => {
  return (
    <div className="PopupParent">
      Successfuly Added Item
      <AiOutlineClose
        onClick={() => handleRemoveClick(id)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default PopupItem;
