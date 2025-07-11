import axios from "axios";
import React from "react";
import { GlobalContext } from "../../contexts/globalProvider";
import Loading from "../../components/loading/loading";
import SEO from "../../components/seo/seo";
const Home = () => {
  const { state, setState } = React.useContext(GlobalContext);
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          setLoading(false);
          setTodos(response.data);
        })
        .catch((error) => {
          setLoading(false);
        });
    }, 2000);
  }, []);

  return (
    <React.Fragment>
      <SEO title="Home" description="Welcome to the homepage of Class 02" />
      <div>
        <h1>{state.name}</h1>
        <h1>{state.email}</h1>
      </div>
      <div>
        <h2>Todos</h2>
        <ul>
          {loading ? (
            <Loading />
          ) : (
            todos.map((todo) => (
              <li key={todo.id}>
                {todo.title} - {todo.completed ? "Completed" : "Pending"}
              </li>
            ))
          )}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Home;
