import * as React from "react";
import { render } from "react-dom";
import VerticalComponent from "./components/vertical.component";
import HorizontalComponent from "./components/horizontal.component";

import "./index.css";

export default class Examples extends React.PureComponent<{}, {}> {
  render() {
    // console.log('Examples.render');
    return (
      <div>
        <h1>react-list-drag-and-drop</h1>
        <div className="examples">
          <HorizontalComponent />
          <VerticalComponent />
        </div>
      </div>
    );
  }
}
render(<Examples />, document.getElementById("root"));
