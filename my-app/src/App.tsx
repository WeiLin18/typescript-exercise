import React, { useState } from "react";
import "./App.css";
import EffectExample from "./Example";

type TitleProps = {
  text: string;
};

// const teamsWithLeaderInfo = teams.map((team) => {
//   if(id === )
//   const leader = users.find((user) => user.teamId === team.id);
//   return { ...team, leader };
// });

const Title: React.FC<TitleProps> = ({ text }) => {
  const [title, setTitle] = useState<string | undefined>("example");
  return <p>{text}</p>;
};

function App() {
  return (
    <div className="App">
      <EffectExample />
    </div>
  );
}

export default App;
