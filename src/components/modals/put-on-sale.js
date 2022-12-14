import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./modals.scss";

const PutOnSale = (props) => {
  return (
    <div>
      <Modal
        centered
        show={props.show}
        onHide={props.close}
        className="modal_put_on_sale"
      >
        <Modal.Header closeButton>
          <Modal.Title>Put On Sale</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
            //   onChange={(e) => inputClickHandler(e)}
              placeholder="0 ETH"
            />
            <span
              style={{
                color: "red",
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
            error
            </span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="cancel" onClick={props.close}>
            Close
          </button>
          <button className="accept" onClick={props.close}>
            Put On Sale
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PutOnSale;
