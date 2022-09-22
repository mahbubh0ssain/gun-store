import React, { useState } from "react";
import Modal from "../Modal/Modal";

const Singlegun = (props) => {
  const [modalData, setModalData] = useState({});
  const { gun, increaseCart } = props;
  const { name, img, bullet, capacity, action, price } = gun;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl ">
        <figure>
          <img className="h-80" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h3 className="card-title text-base">
            {name}
            <div className="badge badge-secondary ">
              <h3 className="text-xs">{bullet}</h3>
            </div>
          </h3>
          <div className="card-actions justify-start">
            <div className="badge badge-outline">{capacity}</div>
            <div className="badge badge-outline">{action}</div>
            <div className="badge badge-outline">${price}</div>
          </div>
          <div className="mr-auto ">
            <label
              onClick={() => setModalData(gun)}
              htmlFor="my-modal-3"
              className="btn modal-button btn-sm btn-outline mr-4"
            >
              Details
            </label>
            <button onClick={increaseCart} className="btn btn-sm btn-outline">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {modalData && (
        <Modal data={modalData} setModalData={setModalData}></Modal>
      )}
    </div>
  );
};

export default Singlegun;
