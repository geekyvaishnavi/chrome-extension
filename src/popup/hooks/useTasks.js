import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const isChrome = typeof chrome !== "undefined" && chrome.storage;

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const settledRef = useRef(false);

  // load tasks
  useEffect(() => {
    if (isChrome) {
      chrome.storage.sync.get(["tasks"], (res) => {
        if (!settledRef.current && res.tasks) setTasks(res.tasks);
        settledRef.current = true;
      });
    } else {
      const data = localStorage.getItem("tasks");
      if (!settledRef.current && data) setTasks(JSON.parse(data));
      settledRef.current = true;
    }
  }, []);


  const updateStorage = (updater) => {
    settledRef.current = true;

    setTasks((prev) => {
      const data = typeof updater === "function" ? updater(prev) : updater;

      if (isChrome) {
        chrome.storage.sync.set({ tasks: data });
      } else {
        localStorage.setItem("tasks", JSON.stringify(data));
      }

      return data;
    });
  };

  const addTask = (input, priority) => {
    if (!input.trim()) return;

    const newTask = {
      uuid: uuidv4(),
      task: input.trim(),
      priority,
      isCompleted: false
    };

    updateStorage((prev) => [newTask, ...prev]);
  };

  const deleteTask = (uuid) => {
    updateStorage((prev) => prev.filter((t) => t.uuid !== uuid));
  };

  const toggleTaskCompletion = (uuid) => {
    updateStorage((prev) =>
      prev.map((t) =>
        t.uuid === uuid ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  };

  const editTask = (uuid, newText) => {
    if (!newText.trim()) return;

    updateStorage((prev) =>
      prev.map((t) => (t.uuid === uuid ? { ...t, task: newText.trim() } : t))
    );
  };

  return {
    tasks,
    addTask,
    deleteTask,
    toggleTaskCompletion,
    editTask
  };
};
