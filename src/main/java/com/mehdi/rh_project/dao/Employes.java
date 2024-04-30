package com.mehdi.rh_project.dao;

import com.mehdi.rh_project.cenum.Contrat_Type;
import com.mehdi.rh_project.cenum.Fonction_Type;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.List;

@Entity
@NoArgsConstructor @AllArgsConstructor @Getter @Setter @ToString @Builder
public class Employes {
    @Id
    private String cin;

    @Column(nullable = false)
    private String nom;

    @Column(nullable = false)
    private String prenom;

    private String photo;

    @Column(nullable = false)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private String dateNsc;

    @Column(unique = true,nullable = false)
    private int telephone;

    @Column(unique = true,nullable = false)
    private String email;

    @Column(nullable = false)
    private String cnss;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Fonction_Type fonction;

    @Column(nullable = false)
    private String dateRecrutement;

    @Column(nullable = false)
    private float salaire;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Contrat_Type contrat;

    @Column(nullable = false)
    private String passwd;

    @ManyToOne
    @JoinColumn(name = "departement_id")
    private Departement departement;

    @OneToMany(mappedBy = "employes")
    private List<Conges> congesList;

    @OneToMany(mappedBy = "employes")
    private List<Horaire> horaireList;

    @OneToMany(mappedBy = "employes")
    private List<Performance> performanceListe;

    @ManyToMany
    @JoinTable(
            name = "employes_taches",
            joinColumns = @JoinColumn(name = "employes_id"),
            inverseJoinColumns = @JoinColumn(name = "taches_id")
    )
    private List<Taches> tachesList ;
}
