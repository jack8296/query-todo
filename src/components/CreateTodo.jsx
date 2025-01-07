import { useCallback, useState, memo } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../helper/api.helper";

const CreateTodo = () => {
  const [value, setValue] = useState("");

  const queryClient = useQueryClient();

  const handleChangeValue = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const submitTodo = useCallback(async (body) => {
    try {
      const res = await api.post("/todos/add", body);
      return res?.data;
    } catch (e) {
      return e.message;
    }
  }, []);

  const { mutate, isPending } = useMutation({
    mutationFn: submitTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
      setValue("");
    },
    onError: (e) => {
      console.error("Error adding todo:", e.message);
    },
  });

  const handleTodo = useCallback(async () => {
    const body = {
      todo: value,
      completed: false,
      userId: 5,
    };
    mutate(body);
  }, [mutate, value]);

  console.log("CreateTodo");

  return (
    <div className="w-10 m-auto mt-4 flex justify-center gap-3">
      <input
        type="text"
        className="form-control border-2 border-black rounded px-2 py-1"
        placeholder="Add a new task..."
        onChange={handleChangeValue}
      />
      {isPending ? (
        <div>Adding...</div>
      ) : (
        <button
          type="submit"
          className="btn btn-primary mt-2  bg-green-800 text-white "
          onClick={handleTodo}>
          Add
        </button>
      )}
    </div>
  );
};

export default memo(CreateTodo);
