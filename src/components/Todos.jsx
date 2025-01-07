import { memo, useCallback } from "react";
import { Link } from "react-router";
import { api } from "../helper/api.helper";
import { useQuery } from "@tanstack/react-query";

const Todos = () => {
  const getUsers = useCallback(async () => {
    try {
      const response = await api.get("/todos");
      return response?.data?.todos;
    } catch (err) {
      return err;
    }
  }, []);

  const { isLoading, error, data } = useQuery({
    queryKey: ["todos"],
    queryFn: getUsers,
    staleTime: 10000,
  });

  if (error) {
    return <div className="text-center p-2">{error}</div>;
  }

  if (isLoading) {
    return <div className="text-center p-2">Loading...</div>;
  }
  console.log("I am Todos page");
  return (
    <div>
      <ul className="w-60 m-auto list-disc p-2 ">
        {data.map((data) => (
          <li key={data.id} className="p-1 bg-slate-200 m-1 cursor-pointer">
            <Link to={`/todo/${data.id}`}>{data.todo}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(Todos);
