// import React from "react";
// import Navbar from "./components/Navbar";
// // import Sidebar from "./components/Sidebar";
// // import { useAuth } from "./context/AuthProvider";
// const App = () => {
  
//   return (
//     <div >
//       <Navbar></Navbar>
      
//     </div>
//   );
// };

// export default App;


import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home ";
import Search from "./components/Search";
import PlayingVideo from "./components/PlayingVideo";
import Loading from "./loader/Loading";



function App() {

  return (
    <div>
         
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/video/:id" element={<PlayingVideo />} />
      </Routes>
    </div>
  );
}

export default App;