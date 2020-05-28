import React from "react";
import { Container } from "react-bootstrap";
import Menu from "./Components/Menu";
import Modal from "./Components/Modal";

//redux
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Menu />
      <Container className="mt-5">
        <h1 className="text-center">Tweets</h1>
        <Modal>A ver que pedo!</Modal>
      </Container>
    </Provider>
  );
}

export default App;
