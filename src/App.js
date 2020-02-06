import React, { Component, Suspense } from "react";
import { Route } from "react-router-dom";

import Header from "./components/header/Header";
import css from "./App.css";

const AsyncMainBody = React.lazy(() => import("./screens/mainBody/MainBody"));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPosition: 0
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    var scroll = window.scrollY;
    this.setState({ scrollPosition: scroll });
    console.log(scroll);
  };

  setPos = value => {
    this.setState({ scrollPosition: this.state.scrollPosition + 1 });

    console.log(this.state.scrollPosition);
  };

  render() {
    return (
      <div className={css.app}>
        <Header scrollPosition={this.state.scrollPosition} />
        <Route
          path="/"
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <AsyncMainBody />
            </Suspense>
          )}
        />
      </div>
    );
  }
}

export default App;
