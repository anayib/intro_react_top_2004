import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";


function MainLayout() {
  return(
    <>
    <nav>
      <Link to="/Products">Product</Link>
      <Link to="/about">About</Link>
    </nav>
    <div>
      <Outlet />
    </div>
    </>
  )
}

function Products() {
  return <h1>Products Page</h1>
};

function About() {
  return <h1>About</h1>
};

export default function App(){
  return(
    <Router>
    <Routes>
      <Route path="/" element={<MainLayout/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/about" element={<About/>}/>
    </Routes>
  </Router>
  )
}