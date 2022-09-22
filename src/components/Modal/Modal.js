import React from "react";

const Modal = (props) => {
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => props.setModalData(null)}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <img src={props.data.img} alt="" className="h-80 w-80 mx-auto" />
          <h3 className="text-lg font-bold">{props.data.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Modal;
