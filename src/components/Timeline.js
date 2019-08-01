import React from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
const VALUES = ['01/01/1994', '02/01/1994', '03/01/1994'];

export default class Timeline extends React.Component {
  state = { value: 0, previous: 0 };

  render() {
    return (
      <div>
        {/* Bounding box for the Timeline */}
        <div style={{ width: '60%', height: '100px', margin: '0 auto' }}>
          <HorizontalTimeline
            index={this.state.value}
            indexClick={index => {
              this.setState({ value: index, previous: this.state.value });
            }}
            values={VALUES}
          />
        </div>
        <div className="text-center">Hello</div>
      </div>
    );
  }
}
