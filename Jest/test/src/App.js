import React from 'react';
import Header from './Component/Header'
//import logo from './logo.svg';
// import './App.css';


// const STATUS = {
//   HOVERED: 'hovered',
//   NORMAL: 'normal',
// };

// function App(props) {

//   const [classState, classSetstate] = React.useState(STATUS.NORMAL);

//   const _onMouseEnter = () => {
//     classSetstate(STATUS.HOVERED)
//   }
//   const _onMouseLeave = () => {
//     classSetstate(STATUS.NORMAL)
//   }


//   return (
//     <a
//       className={classState}
//       href={props.page || '#'}
//       onMouseEnter={_onMouseEnter}
//       onMouseLeave={_onMouseLeave}
//     >
//       {props.children}
//     </a>

//   );
// }

const App = (props) => {
  return(
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
