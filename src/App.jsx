import { BrowserRouter, Route, Routes } from "react-router-dom";
import {  Provider } from "react-redux";
import Body from "./components/Body";
import Profile from "./components/Profile";
import Login from "./components/Login";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";



function App() {

  return (

    <>
    <Provider store={appStore}>
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body />} >
      <Route path="/feed" element={<Feed />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} /> 
      </Route>

    </Routes>
    </BrowserRouter>
    </Provider>

    </>
  )
} 

export default App;
