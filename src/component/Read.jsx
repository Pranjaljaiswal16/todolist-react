const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const DeleteHandler = (id) => {
    const filtertodo = todos.filter((todo) => todo.id != id);
    settodos(filtertodo);
  };

  const rendertodos = todos.map((todo) => {
    return (
      <li
        key={todo.id}
        className="bg-gray-800 rounded-xl p-4 mb-4 flex justify-between items-center font-thin"
      >
        <span className="text-2xl ">{todo.title}</span>
        <span
          onClick={() => {
            DeleteHandler(todo.id);
          }}
          className="bg-gray-900 px-3 py-2 rounded-xl cursor-pointer font-thin text-red-300"
        >
          Delete
        </span>
      </li>
    );
  });
  return (
    <div className="w-[40%] p-10">
      <h1 className="text-5xl font-thin mb-10 p-2">
        <span className="text-pink-300">Pending</span> Todos
      </h1>

      <h1>{rendertodos}</h1>
    </div>
  );
};

export default Read;
