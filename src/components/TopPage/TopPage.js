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



/*
function updateOrder(arr, beg, end) {
	const copy = arr.slice(0);
	const val = copy[beg];
	copy.splice(beg, 1);
	copy.splice(end, 0, val);
	return copy;
  }
  
function clamp(n, min, max) {
	return Math.max(Math.min(n, max), min);
}
  
  const itemsCount = 6;
  const itemHeight = 75; // set list-item height and line-height in css as well

  class Demo extends Component {
	state = {
	  topDeltaY: 0,
	  mouseY: 0,
	  isPressed: false,
	  lastPressed: 0,
	  order: range(itemsCount)
	};
  
	handleTouchStart = (pos, pressY, { touches: [{ pageY }] }) => {
	  this.setState({
		topDeltaY: pageY - pressY,
		mouseY: pressY,
		isPressed: true,
		lastPressed: pos
	  });
  
	  window.addEventListener("touchmove", this.handleTouchMove);
	  window.addEventListener("touchend", this.handleTouchEnd);
	};
  
	handleTouchMove = e => {
	  e.preventDefault();
	  this.handleMouseMove(e.touches[0]);
	};
  
	handleMouseDown = (pos, pressY, { pageY }) => {
	  this.setState({
		topDeltaY: pageY - pressY,
		mouseY: pressY,
		isPressed: true,
		lastPressed: pos
	  });
  
	  window.addEventListener("mousemove", this.handleMouseMove);
	  window.addEventListener("mouseup", this.handleMouseUp);
	};
  
	handleMouseMove = ({ pageY }) => {
	  const { isPressed, topDeltaY, order, lastPressed } = this.state;
  
	  if (isPressed) {
		const mouseY = pageY - topDeltaY;
		const currentRow = clamp(
		  Math.round(mouseY / itemHeight),
		  0,
		  itemsCount - 1
		);
		let newOrder = order;
  
		if (currentRow !== order.indexOf(lastPressed)) {
		  newOrder = updateOrder(order, order.indexOf(lastPressed), currentRow);
		}
  
		this.setState({ mouseY, order: newOrder });
	  }
	};
  
	handleMouseUp = () => {
	  this.setState({ isPressed: false, topDeltaY: 0 });
  
	  window.removeEventListener("mouseup", this.handleMouseUp);
	  window.removeEventListener("mousemove", this.handleMouseMove);
	};
  
	handleTouchEnd = () => {
	  this.setState({ isPressed: false, topDeltaY: 0 });
  
	  window.removeEventListener("touchmove", this.handleTouchMove);
	  window.removeEventListener("touchend", this.handleTouchEnd);
	};
  
	render() {
	  const { mouseY, isPressed, lastPressed, order } = this.state;
  
	  return (
		<div className="demo-container">
		  <NodeGroup
			data={range(itemsCount)}
			keyAccessor={d => `item-key-${d}`}
			start={d => ({
			  scale: 1,
			  shadow: 1,
			  y: order.indexOf(d) * itemHeight
			})}
			update={d => {
			  const dragging = lastPressed === d && isPressed;
  
			  return {
				scale: [dragging ? 1.1 : 1],
				shadow: [dragging ? 5 : 1],
				y: [order.indexOf(d) * itemHeight],
				timing: { duration: 350, ease: easeExpOut }
			  };
			}}
		  >
			{nodes => (
			  <div className="list">
				{nodes.map(({ key, data, state }) => {
				  const { shadow, scale, y } = state;
				  const transY = lastPressed === data && isPressed ? mouseY : y;
  
				  return (
					<div
					  className="list-item"
					  key={key}
					  onMouseDown={e => this.handleMouseDown(data, y, e)}
					  onTouchStart={e => this.handleTouchStart(data, y, e)}
					  style={{
						boxShadow: `rgba(0, 0, 0, 0.4) 0px ${shadow}px ${2 *
						  shadow}px 0px`,
						transform: `translate3d(0, ${transY}px, 0) scale(${scale})`,
						WebkitTransform: `translate3d(0, ${transY}px, 0) scale(${scale})`,
						zIndex: data === lastPressed ? 99 : data
					  }}
					>
					  {order.indexOf(data) + 1}
					</div>
				  );
				})}
			  </div>
			)}
		  </NodeGroup>
		</div>
	  );
	}
  }
  
  render(<Demo />, document.getElementById("root"));
	*/




class TopPage extends Component {
	render() {
		return (
			<div className="TopPage">

				
				<div class="ui animated button" tabindex="0">
  					<div class="visible content">Next</div>
  					<div class="hidden content">
    				<i class="right arrow icon"></i>
  					</div>
				</div>
				<div class="ui vertical animated button" tabindex="0">
  					<div class="hidden content">Shop</div>
  					<div class="visible content">
    					<i class="shop icon"></i>
  					</div>
				</div>

				<div class="ui labeled button" tabindex="0">
					<div class="ui button">
						<i class="heart icon"></i> Like
					</div>
					<a class="ui basic label">
						0
					</a>
				</div>
				<button class="ui twitter button">
					<i class="twitter icon"></i>
					Twitter
				</button>
			</div>
			
		)
	}
}



export default Example

