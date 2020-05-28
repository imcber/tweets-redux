import React from "react";
import { Modal as ModalBt } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { openCloseAddTweetModalAction } from "../actions/modalsActions";

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const closeModal = (state) => dispatch(openCloseAddTweetModalAction(state));

  const isOpen = useSelector((state) => state.modals.stateModalAddTweet);

  return (
    <ModalBt onHide={() => closeModal()} show={isOpen} size="lg" centered>
      {children}
    </ModalBt>
  );
};

export default Modal;
