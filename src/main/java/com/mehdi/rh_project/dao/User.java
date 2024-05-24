package com.mehdi.rh_project.dao;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

import java.security.Principal;
import java.util.Collection;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User implements UserDetails , Principal {
    @Id
    private String cin;

    @Column(nullable = false)
    private String nom;

    @Column(nullable = false)
    private String prenom;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private String photo;

    @Column(unique = true,nullable = false)
    private String telephone;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;

    @Column(nullable = false)
    @DateTimeFormat(pattern = "MM-dd-yyyy")
    private String dateNsc;


    @Column(nullable = false)
    private String cnss;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Fonction_Type fonction;

    @Column(nullable = false)
    @DateTimeFormat(pattern = "MM-dd-yyyy")
    private String dateRecrutement;

    @Column(nullable = false)
    private float salaire;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Contrat_Type contrat;



    @ManyToOne
    @JoinColumn(name = "departement_id")
    private Departement departement;

    @JsonIgnore
    @OneToMany(mappedBy = "employes",cascade = CascadeType.ALL)
    private List<Conges> congesList;

    @JsonIgnore
    @OneToMany(mappedBy = "employes",cascade = CascadeType.ALL)
    private List<Horaire> horaireList;

    @JsonIgnore
    @OneToMany(mappedBy = "employes",cascade = CascadeType.ALL)
    private List<Performance> performanceListe;

    @JsonIgnore
    @OneToMany(mappedBy = "employes",cascade = CascadeType.ALL)
    private List<Taches> tachesList ;


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public String getName() {
        return email;
    }
}
