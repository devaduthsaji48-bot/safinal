import React, { useEffect, useState } from "react";
import axios from "axios";
import CompanyForm from "./components/CompanyForm";
import CompanyList from "./components/CompanyList";
import "./App.css";

const API = "http://127.0.0.1:8000/api/companies/";

export default function App() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);

  const load = async () => {
    const { data } = await axios.get(API);
    setItems(data);
    setSelected(null);
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="App">
      <h1>Company Management</h1>
      <CompanyForm onSaved={load} selected={selected} />
      <CompanyList items={items} refresh={load} select={setSelected} />
    </div>
  );
}
