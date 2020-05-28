import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { openCloseAddTweetModalAction } from "../actions/modalsActions";
import LogoRedux from "../assets/images/original.png";

const Menu = () => {
  //Funcion para el toogle del modal
  const dispatch = useDispatch();
  const toogleAddTweetModal = (state) => {
    dispatch(openCloseAddTweetModalAction(state));
  };

  return (
    <Navbar bg="dark" variant="dark" className="">
      <Container>
        <Navbar.Brand>
          <img
            alt="Logo"
            src={LogoRedux}
            width="30"
            height="30"
            className="d-inline-block align-top mr-4"
          />
          Tweets Simulator Redux
        </Navbar.Brand>
        <Button
          variant="outline-success"
          onClick={() => toogleAddTweetModal(true)}
        >
          Nuevo Tweet
        </Button>
      </Container>
    </Navbar>
  );
};

export default Menu;
