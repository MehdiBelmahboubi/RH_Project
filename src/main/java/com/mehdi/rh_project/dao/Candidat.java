package com.mehdi.rh_project.dao;

import com.mehdi.rh_project.enums.Etat_Candidature;
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

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Etat_Candidature etat;

    @Lob
    @Column(name = "cv",columnDefinition="LONGBLOB")
    private byte[] cv;

    @Lob
    @Column(name = "lettreMotivation",columnDefinition="LONGBLOB")
    private byte[] lettreMotivation;

    @ManyToOne
    @JoinColumn(name = "departement_id")
    private Departement departement;
}
