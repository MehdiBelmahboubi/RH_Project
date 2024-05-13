package com.mehdi.rh_project.dao;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

@Entity @NoArgsConstructor @AllArgsConstructor @Setter @Getter @ToString @Builder
public class Horaire {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private String jour;

    @Column(nullable = false)
    private Long heureTravaille;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "employes_id")
    private User employes;
}
