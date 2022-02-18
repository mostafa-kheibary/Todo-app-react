import { motion } from "framer-motion";
import TaskContext from "../context/TaskContext";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddTask.css";
const AddTask = () => {
  const { addTasks } = useContext(TaskContext);
  const [text, setText] = useState({ topic: "", content: "" });
  const handleTopic = (e) => {
    setText({ ...text, topic: e.target.value });
  };
  const handleContent = (e) => {
    setText({ ...text, content: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setText({ topic: "", content: "" });
    if (text.topic.trim() !== "" && text.content.trim() !== "") {
      addTasks(text.topic, text.content);
    } else {
      errorMessage();
    }
  };
  const errorMessage = () => {
    toast.error("Please fill the fallowing form");
  };
  return (
    <div className="add-task">
      <ToastContainer />
      <div className="add-task__title">
        <img
          className="add-task__title__icon"
          src="./svg/add-task.svg"
          alt=""
        />
        <h2 className="add-task__title__text">Make New Task</h2>
      </div>
      <form onSubmit={handleSubmit} className="add-task__inputs">
        <div>
          <p className="add-task__lether-count">{text.topic.length}/50</p>
          <input
            maxLength={50}
            value={text.topic}
            onChange={handleTopic}
            className="input add-task__inputs__name"
            type="text"
            placeholder="your task topic"
          />
        </div>
        <div>
          <p className="add-task__lether-count">{text.content.length}/75</p>
          <textarea
            maxLength={75}
            value={text.content}
            onChange={handleContent}
            className="input add-task__inputs__content"
            type="text"
            placeholder="more info about task"
          />
        </div>

        <motion.button
          type="submit"
          whileTap={{ scale: 0.9 }}
          className="add-task__inputs__submit"
        >
          Create New Task
        </motion.button>
      </form>
    </div>
  );
};

export default AddTask;
