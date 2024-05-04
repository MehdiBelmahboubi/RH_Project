package com.mehdi.rh_project.dao;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mehdi.rh_project.dao.Conges;
import com.mehdi.rh_project.dao.Horaire;
import com.mehdi.rh_project.dao.Departement;
import com.mehdi.rh_project.dao.Performance;
import com.mehdi.rh_project.dao.Taches;
import com.mehdi.rh_project.enums.Contrat_Type;
import com.mehdi.rh_project.enums.Fonction_Type;
import com.mehdi.rh_project.enums.Role;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@ToString
@SuperBuilder
public class Employes extends User {

    @Column(nullable = false)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private String dateNsc;


    @Column(nullable = false)
    private String cnss;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Fonction_Type fonction;

    @Column(nullable = false)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private String dateRecrutement;

    @Column(nullable = false)
    private float salaire;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Contrat_Type contrat;

    @Enumerated(EnumType.STRING)
    private Role role = Role.EMPLOYE;

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

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }
}
