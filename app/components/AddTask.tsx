"use client";
import React, { FormEventHandler, useState } from "react";
import Modal from "./Modal";
import { addTodos } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
export default function AddTask() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTask, setNewTask] = useState<string>("");
  const router = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodos({
      id: uuidv4(),
      text: newTask,
    });
    setNewTask("");
    setModalOpen(false);
    router.refresh();
  };
  return (
    <div className="max-w-4xl">
      <button
        className="btn-primary btn btn-full"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Add new task
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmit}>
          <h3 className="font-bold text-lg">Add new task</h3>
          <div className="modal-action">
            <input
              value={newTask}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              {" "}
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
