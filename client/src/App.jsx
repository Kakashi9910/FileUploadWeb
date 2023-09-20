import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import axios from "axios";
import GetItemsList from "./GetItemsList";

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const [name, setName] = useState("");
  const [status,setStatus]=useState(false);

  const getItems = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:8000/api/v1/items");
      setItems(res.data.items);
      setLoading(false);
      console.log(res.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const addItem = async (e) => {
    e.preventDefault();
    try {
      setStatus(!status);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("file", fileInputRef.current.files[0]);
      const res = await axios.post(
        "http://localhost:8000/api/v1/items",
        formData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  

  useEffect(() => {
    getItems();
  }, [status]);

  return (
    <div>
      <div className="addItems">
        <input
          type="text"
          placeholder="add name"
          onChange={(e) => setName(e.target.value)}
        />
        <input type="file" ref={fileInputRef} />
        <button onClick={addItem}>Add</button>
      </div>
      <div>
        <h1>Reload the page to see new added item</h1>
      </div>
      <GetItemsList
        items={items}
      />

    </div>
  );
};

export default App;