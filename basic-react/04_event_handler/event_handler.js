
// Button Component
// const MyButton = (props) => {
//     const handleButtonClick = () => {
//         alert(props.message);
//     }

//     return (
//         <button onClick={handleButtonClick} style={{ margin: "10px" }}>
//             {props.children}
//         </button>
//     );
// }


// // App Component
// const MyApp = () => {
//     return (
//         <div>
//             <h1>Learn React</h1>
//             <MyButton message="Learn React">React</MyButton>
//             <MyButton message="Learn JavaScript">JavaScript</MyButton>
//         </div>
//     );
// }

// const myElement = <MyApp />;
// const myApp = myElement;

// ReactDOM.createRoot(document.getElementById('root')).render(myApp);


class CounterCombined extends Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      };
    }
  
    increment = () => {
      this.setState({ count: this.state.count + 1 });
    };
  
    decrement = () => {
      this.setState({ count: this.state.count - 1 });
    };
  
    render() {
      return (
        <div>
          <h2>Pengenalan React Tingkat Dasar</h2>
          <p style={{  fontSize: 28 }}>Counter: {this.state.count}</p>
          <button onClick={this.decrement}>-1</button>
          <button onClick={this.increment}>+1</button>
        </div>
      );
    }
  }
  
  export default CounterCombined;
