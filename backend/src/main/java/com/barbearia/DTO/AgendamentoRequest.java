package com.barbearia.DTO;

// package com.barbearia.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AgendamentoRequest {
    private String nome;
    private String profissional;
    private String data; // formato: yyyy-MM-dd
    private String hora; // formato: HH:mm


}
