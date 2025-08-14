package com.secure.track.modules.user.models;

import java.time.Instant;
import java.util.List;
import java.util.UUID;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import org.hibernate.annotations.UuidGenerator;
import com.secure.track.modules.vehicle.models.Vehicle;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import jakarta.persistence.CascadeType;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue
    @UuidGenerator
    @Column(name = "id", updatable = false, nullable = false)
    private UUID id;

    @NotBlank(message = "Nome é obrigatório")
    @Size(max = 60)
    @Column(nullable = false)
    private String name;

    @NotBlank(message = "CPF é obrigatório")
    @Size(min = 11, max = 11, message = "CPF deve conter 11 caracteres")
    @Pattern(regexp = "\\d{11}", message = "CPF deve conter apenas números")
    @Column(nullable = false, unique = true, length = 11)
    private String cpf;

    @NotBlank(message = "Email é obrigatório")
    @Email(message = "Email inválido")
    @Size(max = 150)
    @Column(nullable = false, unique = true)
    private String email;

    @NotBlank(message = "Senha é obrigatória")
    @Size(min = 6, max = 100)
    @Column(nullable = false)
    private String password;

    @Size(max = 15)
    @Pattern(regexp = "\\+?\\d{8,15}", message = "Telefone inválido")
    @Column(length = 15)
    @NotBlank(message = "Número é obrigatório")
    private String phone;

    @NotBlank(message = "A rua é obrigatório")
    @Size(max = 100)
    private String street;

    @NotBlank(message = "Número da casa é obrigatório")
    @Size(max = 10)
    private String number;

    @NotBlank(message = "Sua cidade é obrigatória")
    @Size(max = 50)
    private String city;

    @Size(max = 2)
    @Pattern(regexp = "[A-Z]{2}", message = "Estado deve conter 2 letras maiúsculas")
    private String state;

    @Size(max = 9)
    @Pattern(regexp = "\\d{5}-?\\d{3}", message = "CEP inválido")
    private String zipCode;

    @Column(name = "created_at", updatable = false, nullable = false)
    private Instant createdAt;

    @Column(name = "updated_at")
    private Instant updatedAt;

    @PrePersist
    public void prePersist() {
        createdAt = Instant.now();
        updatedAt = Instant.now();
    }

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Vehicle> vehicle;

}