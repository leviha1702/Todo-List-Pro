import "../styles/page1.css";
import React from "react";
import axios from "axios";

const ContentHome = () => {
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

  const handlePassword = () => {
    setPassword(!password);
  };
  return (
    <div className="content">
      <h1>Content Home</h1>
      <button onClick={handleClick}>Click</button>
      <input type="password" onChange={handlePassword} />
    </div>
  );
};

export default ContentHome;
