import React from "react";
import Button from "./main/Button";
import Slider from "./main/Slider";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      price: 1,
    };

    this.onChange = this.onChange.bind(this);
    this.onChangeSlider = this.onChangeSlider.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(fieldName, value) {
    this.setState({ [fieldName]: value });
  }

  onChangeSlider(value) {
    this.setState({ price: value });
  }

  onSubmit() {
    this.props.onAdd(this.state.price, this.state.input);
  }

  render() {
    const { input, price } = this.state;
    return (
      <>
        <div className="input-group my-3">
          <input
            type="text"
            className="form-control"
            placeholder="Items: cake, coffee, croissant"
            aria-label="Item"
            aria-describedby="Add Item"
            onChange={(e) => this.onChange("input", e.target.value)}
          ></input>
          <div className="input-group-append">
            <Button className={"btn btn-primary"} onClick={this.onSubmit}>
              Add
            </Button>
          </div>
        </div>
        <p style={{ fontSize: "2rem" }}>{price} €</p>
        <Slider
          min={1}
          max={10}
          price={price}
          onChange={(e) => {
            this.onChange("price", e);
          }}
        />
      </>
    );
  }
}

export default Add;
