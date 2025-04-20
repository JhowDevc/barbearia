import React, { useState } from "react";
import axios from "axios";
import "./AgendamentoForm.css";

function AgendamentoForm() {
  const [formData, setFormData] = useState({
    cliente: "",
    barbeiro: "",
    data: "",
    hora: "",
  });

  const profissionais = ["Carlos", "João", "André", "Pedro"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Monta o campo dataHorario no padrão ISO-8601 (usado no backend)
    const dataHorario = `${formData.data}T${formData.hora}`;

    const payload = {
      cliente: formData.cliente,
      barbeiro: formData.barbeiro,
      dataHorario: dataHorario,
    };

    try {
      await axios.post("http://localhost:8080/agendamentos", payload);
      alert("Agendamento realizado com sucesso!");

      setFormData({
        cliente: "",
        barbeiro: "",
        data: "",
        hora: "",
      });
    } catch (error) {
      alert("Erro ao agendar. Verifique os dados.");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 className="h2-form" style={styles.titulo}>Agendar Horário</h2>

      <label style={styles.label}>Nome do Cliente:</label>
      <input
        type="text"
        name="cliente"
        value={formData.cliente}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <label style={styles.label}>Data:</label>
      <input
        type="date"
        name="data"
        value={formData.data}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <label style={styles.label}>Hora:</label>
      <input
        type="time"
        name="hora"
        value={formData.hora}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <label style={styles.label}>Profissional:</label>
      <select
        name="barbeiro"
        value={formData.barbeiro}
        onChange={handleChange}
        required
        style={styles.input}
      >
        <option value="">Selecione</option>
        {profissionais.map((p, index) => (
          <option key={index} value={p}>
            {p}
          </option>
        ))}
      </select>

      <button type="submit" style={styles.botao}>
        Agendar
      </button>
    </form>
  );
}

const styles = {
  form: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "2rem",
    background: "black",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  titulo: {
    textAlign: "center",
    marginBottom: "1rem",
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    padding: "0.5rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  botao: {
    padding: "0.75rem",
    borderRadius: "5px",
    backgroundColor: "#1d3557",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default AgendamentoForm;
