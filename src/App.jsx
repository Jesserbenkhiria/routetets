import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./Form";
import User from "./User";
import Hello from "./Hello";
import NotFound from "./NotFound"; // Make sure to create this component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/user/*" element={<User />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="*" element={<NotFound />} /> {/* Fallback route */}
      </Routes>
    </Router>
  );
};

export default App;
