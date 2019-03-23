import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from './Fish';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = fish => {
    /** 1. Take a copy of the existing state 
     *  beacuse we never want to reach into state and modify directly - MUTATION
     *  (when you reach directly into an object that can cause issues with 
     *  performance and things updating out of order)
     * */
    const fishes = { ...this.state.fishes }; // shallow copy

    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;

    // 3. Set the new fishes object to state
    this.setState({ fishes });
    /**
     * setState({fishes: fishes})
     * if key and value are the same, then pass only one as per ES6
     */
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    // 1. Take a copy of state
    const order= { ...this.state.order };
    // 2. Either add to order, or update the number in our order
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update our state object
    this.setState({ order });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => 
              <Fish 
                key={key} 
                index={key} 
                details={this.state.fishes[key]} 
                addToOrder={this.addToOrder} 
              />)}
            {/* used curly brackets above to use JS inside JSX */}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    );
  }
}

export default App;