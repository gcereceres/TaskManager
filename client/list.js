import React, { Component } from "react";

export default class List extends Component {
  renderItem = (item, i) => {
    const { onClickItem } = this.props;

    return (
      <div style={styles.item} onClick={() => onClickItem(item.name)}>
        {item.name}
      </div>
    );
  };

  render() {
    const { list } = this.props;

    return (
      <div style={styles.container}>
        {list.map(this.renderItem)}
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column"
  },
  item: {
    backgroundColor: "whitesmoke",
    marginBottom: 5,
    padding: 15
  }
};