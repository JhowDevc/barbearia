import React, { useEffect, useState } from 'react';
import AgendamentoForm from "../../components/AgendamentoForm/AgendamentoForm";
import CalendarioAgendamento from "../../components/CalendarioAgendamento/CalendarioAgendamento";
import "./home.css";

function Home() {
  const [agendamentos, setAgendamentos] = useState([]);

  // Buscar agendamentos do backend
  const carregarAgendamentos = async () => {
    try {
      const response = await fetch("http://localhost:8080/agendamentos");
      const data = await response.json();
      setAgendamentos(data);
    } catch (error) {
      console.error("Erro ao carregar agendamentos:", error);
    }
  };

  // Excluir agendamento
  const handleDelete = async (id) => {
    const confirmacao = window.confirm("Deseja mesmo cancelar este agendamento?");
    if (!confirmacao) return;

    try {
      const response = await fetch(`http://localhost:8080/agendamentos/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert("Agendamento cancelado com sucesso!");
        carregarAgendamentos(); // Atualiza lista após exclusão
      } else {
        alert("Erro ao cancelar agendamento.");
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  useEffect(() => {
    carregarAgendamentos();
  }, []);

  return (
    <div className='home'>
      <h1>Bem-vindo(a) à Barbearia do Eduardo</h1>
      <p>Você deseja agendar um horário com um de nossos barbeiros?</p>

      <AgendamentoForm />

      <h2>Seus Agendamentos</h2>
      {agendamentos.length === 0 ? (
        <p>Nenhum horário agendado.</p>
      ) : (
        agendamentos.map((agendamento) => (
          <div key={agendamento.id} className="card-agendamento">
            <p><strong>Cliente:</strong> {agendamento.cliente}</p>
            <p><strong>Barbeiro:</strong> {agendamento.barbeiro}</p>
            <p><strong>Horário:</strong> {new Date(agendamento.dataHorario).toLocaleString()}</p>
            <button onClick={() => handleDelete(agendamento.id)}>
              Cancelar Agendamento
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
