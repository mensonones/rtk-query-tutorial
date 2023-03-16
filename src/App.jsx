import { useState, useEffect } from "react";
import "./index.css";

import Jedis from "./components/Jedis";
import NewJedisForm from "./components/NewJedis";

export default function App() {
  return (
    <div className="App">
      <Jedis />
      <NewJedisForm />
    </div>
  );
}