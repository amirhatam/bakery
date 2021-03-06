import React from "react";
import Card from "./main/Card";

class Pay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basket: [],
      subTotal: 0,
      total: 0,
      totalVat: 0,
      totalEcoTax: 0,
    };
    this.onClickProduct = this.onClickProduct.bind(this);
  }

  onClickProduct(name, price) {
    let basket = this.state.basket;
    basket.push(name + " x 1");
    this.setState({ basket });

    let subTotal = this.state.subTotal + price;
    this.setState({ subTotal });
    // console.log("subTotal ", subTotal);

    let totalEcoTax = this.state.totalEcoTax + basket.length * 0.03;
    this.setState({ totalEcoTax });
    // console.log("totalEcoTax ", totalEcoTax);

    let totalVat = this.state.totalVat + subTotal * 0.2;
    this.setState({ totalVat });
    // console.log("totalVat ", totalVat);

    let total = subTotal + totalEcoTax + totalVat;
    total.toFixed(2);
    // console.log("total ", total);
    this.setState({ total });
  }

  render() {
    const { basket, subTotal, total, totalVat, totalEcoTax } = this.state;
    const { list } = this.props;

    return (
      <div
        className="px-0 mt-3 bg-white m-0 fs-4  "
        style={{ height: "500px" }}
      >
        <div className="mt-3 ">
          <div>
            <div className="d-flex px-2">
              {basket.map((el, key) => {
                console.log("item", el);
                return (
                  <>
                    <p className=" px-2" key={key}>
                      {el}
                    </p>
                  </>
                );
              })}
            </div>
          </div>

          <div style={{ float: "right" }}>
            <p className="list-group-item d-flex justify-content-end border-0 pt-0">
              Sub Total : {subTotal} €
            </p>
            <p className="list-group-item d-flex justify-content-end border-0 pt-0">
              VAT : {totalVat} €
            </p>
            <p className="list-group-item d-flex justify-content-end border-0 pt-0">
              Eco Tax : {totalEcoTax} €
            </p>
            <p className="list-group-item d-flex justify-content-end border-0 pt-0 font-weight-bold">
              Total : {total} €
            </p>
          </div>
        </div>
        {list.map((item, key) => {
          return (
            <>
              <Card item={item} onClickProduct={this.onClickProduct} />
            </>
          );
        })}
      </div>
    );
  }
}

export default Pay;
