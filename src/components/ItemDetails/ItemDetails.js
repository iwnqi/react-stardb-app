import React, { Component } from "react";
import "./ItemDetails.css";

const Record = ({ item, field, label }) => {
  return (
    <li>
      <p>
        <span>{label}</span>
        <span>{item[field]}</span>
      </p>
    </li>
  );
};

export default class ItemDetails extends Component {
  state = {
    item: null,
    image: null,
  };
  componentDidMount() {
    this.updateItem();
  }
  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.updateItem();
    }
  }
  updateItem = () => {
    const { id, getItem, getImage } = this.props;

    if (!id) {
      return;
    }
    getItem(id).then((item) => {
      this.setState({ item, image: getImage(item) });
    });
  };

  render() {
    const { item, image } = this.state;
    if (!item) {
      return <span>wait a bit bro</span>;
    }
    const { name } = item;

    return (
      <div className="ItemDetails">
        <img height="235px" width="150px" src={image} alt="gov" />
        <div className="information">
          <h2>{name}</h2>
          <ul>
            {React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { item });
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export { Record };
