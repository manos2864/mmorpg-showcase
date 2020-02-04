import React, { useState, useRef, Fragment } from "react";

import Header from "./components/header/Header";
import MainBody from "./screens/mainBody/MainBody";
import css from "./App.css";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollDiv = useRef();

  const onScroll = () => {
    const scrollTop = scrollDiv.current.scrollTop;
    setScrollPosition(scrollTop);
  };

  return (
    <Fragment>
      <div ref={scrollDiv} onScroll={onScroll} className={css.app}>
        <Header scrollPosition={scrollPosition} />

        <MainBody />
      </div>
    </Fragment>
  );
}

export default App;
