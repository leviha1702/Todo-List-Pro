import "../styles/page1.css";
import React from "react";
import axios from "axios";
import ButtonHome from "./ButtonHome";

const ContentHome = ({ ha }) => {
  const [state, setState] = React.useState(false);
  const [password, setPassword] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://api.example.com/home")
      .then((response) => {
        console.log("Todos:", response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the todos!", error);
      });
  }, []);

  const handleClick = () => {
    setState(!state);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="content">
      <h1>Content Home </h1>

      <button onClick={handleClick}>Click</button>
      <input type="password" onChange={handlePassword} />
      <ButtonHome teacher={ha} />
    </div>
  );
};

export default ContentHome;
