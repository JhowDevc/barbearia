import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";

import axios from "axios";

function CalendarioAgendamento() {
  const [dataSelecionada, setDataSelecionada] = useState(new Date());
  const [horariosDisponiveis, setHorariosDisponiveis] = useState([]);

  const formatarData = (data) => {
    return data.toISOString().split("T")[0]; // "yyyy-MM-dd"
  };

  const buscarHorarios = async (data) => {
    const dataFormatada = formatarData(data);

    try {
      const response = await axios.get(
        `http://localhost:8080/agendamentos/disponiveis?data=${dataFormatada}`
      );
      setHorariosDisponiveis(response.data);
    } catch (error) {
      console.error("Erro ao buscar horários disponíveis:", error);
      setHorariosDisponiveis([]);
    }
  };

  const handleDataChange = (date) => {
    setDataSelecionada(date);
    buscarHorarios(date);
  };

  // Carrega horários da data atual ao abrir a tela
  useEffect(() => {
    buscarHorarios(dataSelecionada);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Escolha um dia para agendar</h2>
      <Calendar onChange={handleDataChange} value={dataSelecionada} />

      <h3 style={{ marginTop: "1rem" }}>
        Horários disponíveis em {dataSelecionada.toLocaleDateString()}:
      </h3>

      {horariosDisponiveis.length > 0 ? (
        <ul>
          {horariosDisponiveis.map((hora, index) => (
            <li key={index}>{hora}</li>
          ))}
        </ul>
      ) : (
        <p>Nenhum horário disponível para este dia.</p>
      )}
    </div>
  );
}

export default CalendarioAgendamento;
