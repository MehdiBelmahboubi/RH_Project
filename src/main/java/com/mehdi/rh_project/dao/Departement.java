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

    @Column(nullable = false,unique = true)
    private String nom;

    @OneToMany(mappedBy = "departement",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<User> userList;


    @OneToMany(mappedBy = "departement",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Candidat> candidatList;
}
