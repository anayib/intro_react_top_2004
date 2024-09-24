import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>
};

function About() {
  return <h1>About</h1>
};

export default function App(){
  return(
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  </Router>
  )
}