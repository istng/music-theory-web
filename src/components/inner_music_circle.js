import React from 'react';


export class MusicCircle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      renderItem: props.renderItem,
    };
  }

  rotateCircle(modeClicked) {
    if (modeClicked.index === 0) {
      return;
    }
    let firstPart = this.state.items.slice(modeClicked.index);
    let secondPart = this.state.items.slice(0, modeClicked.index);
    let newItems = firstPart.concat(secondPart);
    this.setState({
      items: newItems,
    });
  }

  render() {
    return (
        <div>
          <ul className="circle">
            { this.state.items.map((item, index) => {
              return this.props.renderItem(item, index, this.rotateCircle);
            }) }
          </ul>
        </div>
    );
  }
}