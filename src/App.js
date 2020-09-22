import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

//socket.io
import { subscribeToSocket } from './api';

class App extends Component {
  state = {
    timestamp: 'no timestamp yet',
    // msg: 'https://cdn.mitron.tv/upload/video/qwbuaHwGfu.mp4',
  };
  constructor(props) {
    super(props);
    // subscribeToTimer((err, timestamp) =>
    //   this.setState({
    //     timestamp,
    //   })
    // );
    subscribeToSocket((msg) => {
      console.log('socket msg in component', msg);
      // this.setState({ msg });
    });
  }
  render() {
    return (
      <>
        <div className="App">
          <p className="App-intro">
            This is the timer value: {this.state.timestamp}
            {/* <video width="320" height="240" controls>
              <source src={this.state.msg} type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          </p>
        </div>
      </>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
