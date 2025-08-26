import React, { useState } from "react";

const App = () => {
  const [todos, settodos] = useState([
    {
      id: 1,
      title: "Kaam kr le Bhai",
      isCompleted: false,
    },
  ]);

  const [title, settitle] = useState();
  const [checked, setchecked] = useState(true);
  const [gender, setgender] = useState("male");
  const [city, setcity] = useState("mumbai");

  return (
    <>
      <div>
        <h1>Create Task</h1>

        <form>
          <input
            type="text"
            placeholder="title"
            onClick={(e) => {
              settitle(e.target.value);
            }}
            value={title}
          />
          <br />
          <br />
          <input
            type="checkbox"
            onClick={(e) => {
              setchecked(e.target.checked);
            }}
            checked={checked}
          />
          isActive
          <br />
          <br />
          <input
            value={"male"}
            type="radio"
            onClick={(e) => {
              setgender(e.target.value);
            }}
            checked={gender == "male" && true}
          />
          Male
          <br />
          <br />
          <input
            value={"female"}
            type="radio"
            onChange={(e) => {
              setgender(e.target.value);
            }}
            checked={gender == "female" && true}
          />
          female
          <br />
          <br />
          <select
            onClick={(e) => {
              setcity(e.target.value);
            }}
            value={city}
          >
            <option value={"delhi"}>Delhi</option>
            <option value={"mumbai"}>Mumbai</option>
            <option value={"kolkata"}>Kolkata</option>
          </select>
        </form>
      </div>
    </>
  );
};

export default App;
