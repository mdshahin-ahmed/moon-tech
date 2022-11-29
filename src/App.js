import "./App.css";
import Home from "./Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import WishList from "./Pages/WishList/WishList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/top-rated" element={<Cart></Cart>}></Route>
          <Route path="/wish-list" element={<WishList></WishList>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
