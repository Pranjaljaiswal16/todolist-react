import { nanoid } from "nanoid";
import { useState } from "react";

const Create = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const [title, settitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newtodos = {
      id: nanoid(),
      title,
      isCompleted: false,
    };
    const copytodos = [...todos];
    copytodos.push(newtodos);
    settodos(copytodos);

    settitle("");
  };

  return (
    <div className="w-[60%] p-10 ">
      <h1 className="text-5xl font-thin mb-10 p-2">
        Set <span className="text-red-400">Reminders</span> for <br /> Tasks
      </h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => settitle(e.target.value)}
          value={title}
          className="outline-none border-b w-full text-3xl font-thin p-4"
        />
        <br />
        <br />

        <button className="bg-gray-800 border px-5 py-3 rounded text-xl mt-5">
          Todo Create
        </button>
      </form>
    </div>
  );
};

export default Create;
