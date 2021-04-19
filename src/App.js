import Header from "./components/header";
import Main from "./pages/main";
import Composer from "./pages/composer";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState({});
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main tasks={tasks} setTasks={setTasks} />
        </Route>
        <Route exact path="/task-:taskname">
          <Composer tasks={tasks} setTasks={setTasks} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
