package com.mehdi.rh_project.dao;

import jakarta.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor @AllArgsConstructor @Setter @Getter @ToString @Builder
public class RH {
    @Id
    private String cin;

    @Column(nullable = false)
    private String nom;

    @Column(nullable = false)
    private String prenom;

    private String photo;

    @Column(unique = true,nullable = false)
    private Long telephone;

    @Column(unique = true,nullable = false)
    private String email;

    @OneToOne
    @JoinColumn(name = "departement_id")
    private Departement departement;
}
