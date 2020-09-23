import React, { useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core/";
import ListItemComponent from './ListItemComponent'
import "./App.css";

function App() {

  const [tasks, setTasks] = useState(["Exercise","Take Shower","Eat Breakfast", "Study"]);
  const [input, setInput] = useState('');
  
 
  const addTask = () => {
    setTasks([...tasks, input]);
    setInput("");
  };

  const handleDelete = (index) => {
    tasks.splice(index, 1)
    console.log(tasks)
    setTasks(tasks)
    
}


  return (

    <div className="App">
      <h1>Task List App</h1>
      <form >
        <FormControl>
          <InputLabel>Write your task here:</InputLabel>
          <Input value={input} onChange={(event) => setInput(event.target.value)}/>
        </FormControl>

        <Button
          disabled={!input}
          variant="contained"
          color="secondary"
          type="submit"
          onClick={addTask}
        >
          Add
        </Button>
        
        {tasks.map((item, index) => (
            <ListItemComponent dataFromParent={item} dataIndex={index} action={handleDelete} key={item} />
          ))}
      </form>
      
    </div>
  );
}

export default App;

