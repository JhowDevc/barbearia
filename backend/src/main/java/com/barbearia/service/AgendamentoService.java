package com.barbearia.service;

import com.barbearia.model.Agendamento;
import com.barbearia.repository.AgendamentoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AgendamentoService {

    private final AgendamentoRepository agendamentoRepository;

    public AgendamentoService(AgendamentoRepository agendamentoRepository) {
        this.agendamentoRepository = agendamentoRepository;
    }

    // Listar todas as reservas
    public List<Agendamento> listarTodos(){
        return agendamentoRepository.findAll();
    }

    // Listar todas as reservas
    public Optional<Agendamento> buscarPorId(Long id){
        return agendamentoRepository.findById(id);
    }

    // Criar nova reserva
    public Agendamento salvar(Agendamento agendamento){
        return agendamentoRepository.save(agendamento);
    }
    // Atualizar reserva existente
    public Agendamento atualizar (Long id, Agendamento novoAgendamento){
        Agendamento existente = agendamentoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Reserva não encontrada"));

        existente.setCliente(novoAgendamento.getCliente());
        existente.setBarbeiro(novoAgendamento.getBarbeiro());
        existente.setDataHorario(novoAgendamento.getDataHorario());

        return agendamentoRepository.save(existente);
    }

    public void deletar(Long id) {
        if (!agendamentoRepository.existsById(id)){
            throw new RuntimeException("Agendamento não encontrado");
        }
        agendamentoRepository.deleteById(id);
    }
}
