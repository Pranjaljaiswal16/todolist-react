import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Create = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (users) => {
    users.isCompleted = false;
    users.id = nanoid();

    const copytodos = [...todos];
    copytodos.push(users);
    settodos(copytodos);
    toast.success("Todo Created!👻");

    reset();
  };

  return (
    <div className="w-[60%] p-10 ">
      <h1 className="text-5xl font-thin mb-10 p-2">
        Set <span className="text-red-400">Reminders</span> for <br /> Tasks
      </h1>

      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("title", { required: "title con not be empty" })}
          type="text"
          placeholder="title"
          className="outline-none border-b w-full text-3xl font-thin p-4"
        />
        <small className="text-red-400">{errors?.title?.message}</small>
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
