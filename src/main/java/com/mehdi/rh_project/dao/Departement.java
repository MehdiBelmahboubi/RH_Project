package com.mehdi.rh_project.dao;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@NoArgsConstructor @AllArgsConstructor @Getter @Setter @ToString @Builder
public class Departement {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nom;

    @OneToMany(mappedBy = "departement")
    @JsonIgnore
    private List<RH> rhList;

    @OneToMany(mappedBy = "departement")
    @JsonIgnore
    private List<Employes> employesList;

    @OneToMany(mappedBy = "departement")
    @JsonIgnore
    private List<Candidat> candidatList;
}
