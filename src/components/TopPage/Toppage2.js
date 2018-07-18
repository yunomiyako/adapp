import React , {Component}  from "react"
import { Button } from "semantic-ui-react"
import { Advertisement } from 'semantic-ui-react'
import "./TopPage.css"


import { render } from "react-dom";
import NodeGroup from "react-move/NodeGroup";
import { range } from "d3-array";
import { easeExpOut } from "d3-ease";
import { scaleLinear} from "d3-scale";
import { interpolateViridis } from "d3-scale-chromatic";
import "./demo.css";
import { easeElastic } from "d3-ease";


const linear = scaleLinear().domain([0, window.innerWidth]);

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 500, y: 300 };

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
  }

  componentDidMount() {
    // Track mouse/touch movement
    window.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("touchmove", this.handleTouchMove);
  }

  handleMouseMove({ pageX: x, pageY: y }) {
    // Update the state with cursor position
    this.setState({ x, y });
  }

  handleTouchMove({ touches }) {
    // Update the state with touch position
    this.handleMouseMove(touches[0]);
  }

  render() {
    return (
      // React-Move!
      <NodeGroup
        data={range(10).map(d => {
          return {
            key: `key-${d}`,
            x: this.state.x,
            y: this.state.y
          };
        })}
        keyAccessor={d => d.key}
        start={data => {
          return { x: data.x, y: data.y };
        }}
        update={(data, index) => {
          return {
            x: [data.x],
            y: [data.y],
            timing: {
              delay: index * 120,
              duration: 100,
              ease: easeElastic
            }
          };
        }}
      >
        {nodes => {
          // Just a function!
          return (
            <div>
              {nodes.map((node, index) => {
                const { x, y } = node.state;

                return (
                  <div
                    key={node.key}
                    style={{
                      backgroundColor: interpolateViridis(linear(x)),
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      opacity: 0.7,
                      WebkitTransform: `translate3d(${x - 25}px, ${y -
                        25}px, 0)`,
                      transform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
                      zIndex: nodes.length - index + 5000
                    }}
                  />
                );
              })}
            </div>
          );
        }}
      </NodeGroup>
    );
  }
}

render(<Example />, document.getElementById("root"));

export default Example