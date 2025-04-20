# 💈 Barbearia – API de Agendamentos

Sistema **RESTful** feito em **Spring Boot 3** e **Java 21** para gerenciar os horários de uma barbearia.  
Permite **criar, listar, atualizar e excluir** agendamentos de clientes com total controle sobre barbeiro, data e horário.

## ✨ Funcionalidades
- **CRUD completo** de agendamentos (`/agendamentos`)
- Validação automática de dados (Bean Validation)
- Persistência com **Spring Data JPA + Hibernate**
- Banco de testes **H2** (arquivo ou memória)
- **Lombok** para reduzir boilerplate (getters/setters, construtores)
- **Swagger /OpenAPI** (opcional) para explorar os endpoints

## 🛠️ Tecnologias & dependências
| Camada            | Tecnologia                              | Versão |
|-------------------|-----------------------------------------|--------|
| Linguagem         | Java                                    | 21     |
| Framework         | Spring Boot                             | 3.4.4  |
| Persistência      | Spring Data JPA • Hibernate             | 3.4.x • 6.6.x |
| Banco (dev/test)  | H2                                      | 2.3.x  |
| Build             | Maven                                   | 3.9.x  |
| Utilitários       | Lombok • MapStruct (futuro)             | 1.18.x |

