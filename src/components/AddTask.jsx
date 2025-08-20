
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    // ...logic for creating a new Task should be here
    // ... the ID of the Project should be part of the Task data

    const newTask = {
      title,
      description,
      projectId: props.projectId
    } // this will be the body of the request

    try {
      
      console.log(potato) // replicate an error in the connection
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/tasks`, newTask)
      console.log(response)
      console.log("task created correctly!")
      // setProject()
      // props.setProject((state) => {
      //   const clone = structuredClone(state)
      //   clone.tasks.push(response.data)
      //   return clone
      // })
      props.getData()


    } catch (error) {
      console.log(error)
      navigate("/error")
    }


  };
  
  return (
    <div className="AddTask">
      <h3>Add New Task</h3>
      
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;