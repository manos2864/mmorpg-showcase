import React, { Component, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import css from "./App.css";
import Loading from "./components/loading/Loading";

const AsyncMainBody = React.lazy(() => import("./screens/mainBody/MainBody"));
const AsyncUnderConstruction = React.lazy(() =>
  import("./screens/underConstruction/UnderConstruction")
);

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
    this.setState({ ...this.state, scrollPosition: scroll });
  };

  render() {
    return (
      <div className={css.app}>
        <Header scrollPosition={this.state.scrollPosition} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Suspense fallback={<Loading />}>
                <AsyncMainBody />
              </Suspense>
            )}
          />
          <Route
            exact
            path="/eternal-fight"
            render={() => (
              <Suspense fallback={<Loading />}>
                <AsyncUnderConstruction />
              </Suspense>
            )}
          />
          <Route
            exact
            path="/join-the-war"
            render={() => (
              <Suspense fallback={<Loading />}>
                <AsyncUnderConstruction />
              </Suspense>
            )}
          />
          <Route
            exact
            path="/trade-your-goods"
            render={() => (
              <Suspense fallback={<Loading />}>
                <AsyncUnderConstruction />
              </Suspense>
            )}
          />
          <Route
            exact
            path="/hunt-or-haunted"
            render={() => (
              <Suspense fallback={<Loading />}>
                <AsyncUnderConstruction />
              </Suspense>
            )}
          />
          <Route
            exact
            path="/pricing"
            render={() => (
              <Suspense fallback={<Loading />}>
                <AsyncUnderConstruction />
              </Suspense>
            )}
          />
          <Route render={() => <h1>404 Error</h1>} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
