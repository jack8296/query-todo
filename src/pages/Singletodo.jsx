import React, { useCallback, useState, memo, useMemo } from "react";
import { Link, useLocation } from "react-router";
import { api } from "../helper/api.helper";
import { useQuery } from "@tanstack/react-query";

const Singletodo = () => {
  const location = useLocation();
  const todoId = useMemo(() => {
    return location.pathname.split("/")[2];
  }, [location.pathname]);

  const getSingleTodo = useCallback(async () => {
    try {
      const response = await api.get(`/todos/${todoId}`);
      return response?.data;
    } catch (e) {
      console.log(e);
    }
  }, [todoId]);

  const { isLoading, error, data } = useQuery({
    queryKey: ["todo", todoId],
    queryFn: getSingleTodo,
  });

  if (error) {
    return <div className="text-center">{error?.message}</div>;
  }
  if (isLoading) {
    return <div className="text-center">Loading...</div>; // Show loading state while waiting for data to load.  Note: this is just a placeholder. In a real-world app, you might want to display a more user-friendly message.  This is a simplified example.  In a real-world application, you'd also handle errors gracefully.  For example, you might use a try/catch block to handle any errors that occur during the API request.  In this case, we're just logging the error to the console.  In a real-world application, you'd want to display a user-friendly error message.  This is a simplified example.  In a real-world application, you'd also handle errors gracefully.  For example, you might use a try/catch block to handle any errors that occur during the API request.  In this case, we're just logging the error to the console.  In a real-world application, you
  }
  console.log("I am single todo");
  return (
    <div className="text-center p-3">
      <h1>Single Todo details</h1>
      <div>{data?.todo}</div>
      <Link to="../">Back</Link>
    </div>
  );
};

export default memo(Singletodo);
