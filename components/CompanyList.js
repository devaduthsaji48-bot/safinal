import React from "react";
import axios from "axios";
const API = "http://127.0.0.1:8000/api/companies/";

export default function CompanyList({ items, refresh, select }) {
  const del = async (id) => { await axios.delete(`${API}${id}/`); refresh(); };

  return (
    <table>
      <thead>
        <tr>
          <th>Company Name</th>
          <th>Email</th>
          <th>Code</th>
          <th>Website</th>
          <th>Created</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map(r => (
          <tr key={r.id}>
            <td>{r.company_name}</td>
            <td>{r.email}</td>
            <td>{r.company_code}</td>
            <td>{r.website}</td>
            <td>{new Date(r.created_time).toLocaleString()}</td>
            <td className="actions">
              <button onClick={() => select(r)}>Edit</button>
              <button onClick={() => del(r.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
