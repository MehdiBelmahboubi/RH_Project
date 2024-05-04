package com.mehdi.rh_project.dao;

import com.mehdi.rh_project.enums.Taches_Etat;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.List;

@Entity
@NoArgsConstructor @AllArgsConstructor @Setter @Getter @ToString @Builder
public class Taches {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private Taches_Etat etat;

    @Column(nullable = false)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private String dateFin;

    @ManyToMany(mappedBy = "tachesList")
    private List<Employes> employesList;
}
