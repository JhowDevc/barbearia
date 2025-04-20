package com.barbearia.repository;

import com.barbearia.model.Agendamento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AgendamentoRepository extends JpaRepository<Agendamento, Long> {
}
