package com.barbearia.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDateTime;
@Getter
@Setter
@Entity
public class Agendamento {

 @Id

 @GeneratedValue(strategy = GenerationType.IDENTITY)

 private Long id;  // <--- PRECISA de @Id

 private String cliente;
 private String barbeiro;

 @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm")
 @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
 private LocalDateTime dataHorario;

 // Getters/Setters ou Lombok
}
