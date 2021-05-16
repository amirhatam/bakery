import React from "react";
import Add from "./components/Add";
import List from "./components/List";
import Pay from "./components/Pay";
import Button from "./components/main/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import navbar from "./pics/pic1.jpg"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "add",
      items: [],
    };
    this.onClick = this.onClick.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  onClick(value) {
    // console.log("App#onClick value", value);
    this.setState({ activeTab: value });
  }

  onAdd(price, input) {
    // console.log("App#onAdd", price, input);
    let items = this.state.items;
    items.push({ input, price });
    this.setState({
      items,
      activeTab: "list",
    });
  }

  render() {
    const { activeTab, items } = this.state;
    // console.log("activeTab", activeTab);
    // console.log("this.renderTabAdd", this.renderTabAdd);
    // console.log("this.renderTabList", this.renderTabList);
    // console.log("this.renderTabPay", this.renderTabPay);
    return (
      <div style={{ backgroundColor: "#d12839", height: "1000px" }}>
        <div className="text-center" style={{ display: "grid", width: "100%" }}>
        <div style={{background: `url(${navbar})`, height:"170px", borderRadius: "0 0 85% 85% / 30%"}}></div>
         
        <h1
            style={{
              
              fontFamily: "Niconne",
              fontSize: "11vmax",
              color: "#fdead4",
              textShadow:
                "4px 4px #e83d29, 8px 8px #ef952e, 12px 12px #45aa8a, 16px 16px #007273, 20px 20px #022432, 24px 24px #ba1827, 28px 28px #ba1827, 32px 32px #ba1827",
            }}
            className="mb-4 text-center "
          >
            Bakery
          </h1>
          <div className="d-flex justify-content-center offset-3 col-6">
            <Button
          
              isSelected={activeTab === "add"}
              onClick={(e) => this.onClick("add")}
            >
              Add
            </Button>
            <Button
              isSelected={activeTab === "list"}
              onClick={(e) => this.onClick("list")}
            >
              List
            </Button>
            <Button
              isSelected={activeTab === "pay"}
              onClick={(e) => this.onClick("pay")}
            >
              Pay
            </Button>
          </div>
        </div>
        <div className="offset-3 col-6">
          {/* {activeTab === 'add' ? <Add /> : null}
            {activeTab === 'list' ? <List /> : null}
            {activeTab === 'pay' ? <Pay /> : null} */}
          {activeTab === "add" && <Add onAdd={this.onAdd} />}
          {activeTab === "list" && <List list={items} />}
          {activeTab === "pay" && <Pay list={items} />}
        </div>

        {/* <div style={{ backgroundColor: "#d12839",height:"200px", width: "100%", }} /> */}

      
      </div>
    );
  }
}

export default App;
