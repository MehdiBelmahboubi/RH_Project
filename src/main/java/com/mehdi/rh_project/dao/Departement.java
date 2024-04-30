package com.mehdi.rh_project.dao;

import com.mehdi.rh_project.cenum.Depatement_Nom;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@NoArgsConstructor @AllArgsConstructor @Getter @Setter @ToString @Builder
public class Departement {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Depatement_Nom nom;

    @OneToOne
    @JoinColumn(name = "rh_id")
    private RH rh;

    @OneToMany(mappedBy = "departement")
    private List<Employes> employesList;

    @OneToMany(mappedBy = "departement")
    private List<Candidat> candidatList;
}
