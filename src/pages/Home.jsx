import React, { useState, useCallback, useEffect } from "react";
import CreateTodo from "../components/CreateTodo";
import Todos from "../components/Todos";
import { api } from "../helper/api.helper";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const [count, setCount] = useState(0);
  const handleCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  console.log("I am home page");
  return (
    <div className="flex justify-center flex-col">
      <button className="bg-slate-300" onClick={handleCount}>Count</button>
      <CreateTodo />
      <Todos />
    </div>
  );
};

export default Home;
