package com.mehdi.rh_project.dao;

import jakarta.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor @AllArgsConstructor @Setter @Getter @ToString @Builder
public class Candidat {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String nom;

    @Column(nullable = false)
    private String prenom;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String cv;

    @Column(nullable = false)
    private String lettreMotivation;

    @ManyToOne
    @JoinColumn(name = "departement_id")
    private Departement departement;
}
