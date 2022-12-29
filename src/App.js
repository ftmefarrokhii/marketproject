// import { Fragment } from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js'
// import Header from './components/Header';
// import MainHeader from './components/MainHeader';
// import Slideshow from './components/Slideshow';
// import Test from './components/Test';
// import SlideMain from './components/SlideMain';
// import Login from './components/Login';
// import { Switch } from "react-router-dom";
// import {Route,Routes ,BrowserRouter as Router} from 'react-router-dom';

// function App() {
//   return (
//     <Router>
           
//        {/* <Header></Header>
//        <MainHeader></MainHeader>
//       <SlideMain></SlideMain>
//       <Slideshow></Slideshow>
//       <Test></Test>
//       <Login></Login> */}
      
      
//       {/* <Switch> */}
//       <Route path="/" exact>
//       <Header></Header>
//        <MainHeader></MainHeader>
//       <SlideMain></SlideMain>
//       <Slideshow></Slideshow>
//       <Test></Test>
//       <Login></Login>
      
//       </Route>
//       <Route path="/login" >
//         <Login></Login>
//       </Route>
//       {/* </Switch> */}
      
//     </Router>
    

//   );
// }

// export default App;

import { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from './components/Header';
import MainHeader from './components/MainHeader';
import Slideshow from './components/Slideshow';
import Test from './components/Test';
import SlideMain from './components/SlideMain';
import Login from './components/Login';
import { Router, Switch } from "react-router-dom";
import {Route} from 'react-router-dom';

function App() {
  return (
  //   <Router>
  //     <Header></Header>
      
  //   <Route exact path="/">
  //     <Login></Login>
  //   </Route>
  //   <Route path="/www">
  //   <Header></Header>
  //   </Route>
  
  
  // </Router>


    <Fragment>
      <Header></Header>
      <MainHeader></MainHeader>
      <SlideMain></SlideMain>
      <Slideshow></Slideshow>
      <Test></Test>
      <Login></Login>

      
    </Fragment>
    

  );
}

export default App;
