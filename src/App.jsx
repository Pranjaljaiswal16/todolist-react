import { useState } from "react";
import Create from "./component/Create";
import Read from "./component/Read";

const App = () => {
  const [todos, settodos] = useState([
    {
      id: 1,
      title: "Kaam kr le Bhai",
      isCompleted: false,
    },
  ]);

  return (
    <div className="w-screen h-screen bg-gray-900 flex p-10 text-white">
      <Create todos={todos} settodos={settodos} />
      <Read todos={todos} settodos={settodos} />
    </div>
  );
};

export default App;
