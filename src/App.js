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
import { Router} from "react-router-dom";
import {Route} from 'react-router-dom';
import Footer from './components/Footer';
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from './components/Header';
// import Login from './components/Login';
// import Footer from './components/Footer';
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";
function App() {
  return (
  //   <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<Header />}>
  //       <Route index element={<Login />} />
  //       <Route path="Footer" element={<Footer />} />
  //       {/* <Route path="contact" element={<Contact />} />
  //       <Route path="*" element={<NoPage />} /> */}
  //     </Route>
  //   </Routes>
  // </BrowserRouter>

  //   <Router>
  //     <Header></Header>
      
  //   <Route path="/" >
  //     <Login></Login>
  //   </Route>
  //   <Route path="/www">
  //   <Header></Header>
  //   </Route>
  
  
  // </Router>


    <Fragment>
      <Header></Header>
      <MainHeader></MainHeader>
      
      <Slideshow></Slideshow>
      {/* <Test></Test> */}
      {/* <Login></Login> */}
     <Footer/>
    <SlideMain></SlideMain>
      
    </Fragment>
    

  );
}

export default App;
