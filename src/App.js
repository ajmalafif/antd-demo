import React from "react";
import { Button } from "antd";
import "./App.css";

const App = () => (
  <div className="App" 
  style={{ 
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingTop: "25%"
  }}>
    <Button type="primary">Button</Button>
  </div>
);

export default App;
