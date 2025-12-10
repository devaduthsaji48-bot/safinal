import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://127.0.0.1:8000/api/companies/";

export default function CompanyForm({ onSaved, selected }) {
  const [form, setForm] = useState({
    company_name: "",
    email: "",
    company_code: "",
    website: ""
  });

  useEffect(() => {
    if (selected) setForm({
      company_name: selected.company_name || "",
      email: selected.email || "",
      company_code: selected.company_code || "",
      website: selected.website || ""
    });
  }, [selected]);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (selected?.id) {
      await axios.put(`${API}${selected.id}/`, form);
    } else {
      await axios.post(API, form);
    }
    setForm({ company_name: "", email: "", company_code: "", website: "" });
    onSaved();
  };

  return (
    <form onSubmit={onSubmit}>
      <input name="company_name" placeholder="Company Name (min 5 chars)" value={form.company_name} onChange={onChange} required minLength={5} />
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={onChange} required />
      <input name="company_code" placeholder="Company Code (unique, optional)" value={form.company_code} onChange={onChange} />
      <input name="website" placeholder="Website (URL optional)" value={form.website} onChange={onChange} />
      <button type="submit">{selected?.id ? "Update Company" : "Add Company"}</button>
    </form>
  );
}
