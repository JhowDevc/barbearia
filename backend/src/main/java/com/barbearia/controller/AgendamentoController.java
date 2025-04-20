package com.barbearia.controller;

import com.barbearia.service.AgendamentoService;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.*;
import com.barbearia.model.Agendamento;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173") // Libera o React
@RestController
@RequestMapping("/agendamentos")
public class AgendamentoController {

    private final AgendamentoService agendamentoService;

    public AgendamentoController(AgendamentoService agendamentoService) {
        this.agendamentoService = agendamentoService;
    }

    // Listar todos os produtos
    @GetMapping
    public List<Agendamento> listarTodos() {
        return agendamentoService.listarTodos();
    }

    // Buscar produto por ID
    @GetMapping("/{id}")
    public Optional<Agendamento> buscarPorId(@PathVariable Long id) {
        return agendamentoService.buscarPorId(id);
    }

    // Cadastrar novo produto
    @PostMapping
    public Agendamento criar(@RequestBody Agendamento agendamento) {
        return agendamentoService.salvar(agendamento);
    }

    // Atualizar produto
    @PutMapping("/{id}")
    public Agendamento atualizar(@PathVariable Long id, @RequestBody Agendamento agendamento) {
        return agendamentoService.atualizar(id, agendamento);
    }

    // Deletar produto
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        agendamentoService.deletar(id);
    }
}
