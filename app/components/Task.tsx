"use client";
import { deleteTodos } from "@/api";
import { ITask } from "@/types/tasks";
import { useRouter } from "next/navigation";
import React from "react";
interface TaskProps {
  task: ITask;
}
const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();

  const handleOnDelete = (id: string) => {
    deleteTodos(id);
    router.refresh();
  };
  return (
    <>
      <tr key={task.id}>
        <td>{task.text}</td>
        <td>
          <button
            className="btn btn-error mx-2"
            onClick={() => {
              handleOnDelete(task.id);
            }}
          >
            Delete
          </button>
          <button className="btn btn-info">Edit</button>
        </td>
      </tr>
    </>
  );
};

export default Task;
