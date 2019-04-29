import * as React from "react";
import RLDD from "react-list-drag-and-drop/lib/RLDD";
import { State } from "../models/state.model";
import { Item } from "../models/item.model";

const fruits = require("../utils/fruits.json");

export default class VerticalComponent extends React.PureComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { items: fruits.fruits };
  }

  render() {
    const items = this.state.items;
    return (
      <div className="example vertical">
        <h2>Vertical Example: Draggable List of Fruits</h2>
        <p>Drag and drop items to re-order the list.</p>
        <RLDD
          cssClasses="list-container"
          items={items}
          itemRenderer={this.itemRenderer}
          onChange={this.handleRLDDChange}
        />
      </div>
    );
  }

  private itemRenderer = (item: Item, index: number): JSX.Element => {
    return (
      <div className="item">
        <div className="icon">{item.icon}</div>
        <div className="details">
          <p className="title">{item.title}</p>
          <p className="body">{item.body}</p>
        </div>
        <div className="small">
          item.id: {item.id} - index: {index}
        </div>
      </div>
    );
  }

  private handleRLDDChange = (reorderedItems: Array<Item>) => {
    this.setState({ items: reorderedItems });
  }
}
