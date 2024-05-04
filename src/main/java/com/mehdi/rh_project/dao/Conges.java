package com.mehdi.rh_project.dao;

import com.mehdi.rh_project.enums.Conges_Etat;
import com.mehdi.rh_project.enums.Conges_Type;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@NoArgsConstructor @AllArgsConstructor @Setter @Getter @ToString @Builder
public class Conges {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private String dateDemande;

    @Column(nullable = false)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private String dateDebut;

    @Column(nullable = false)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private String dateFin;

    @Column(nullable = false)
    private int periode;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Conges_Type type;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Conges_Etat etat;

    @ManyToOne
    @JoinColumn(name = "employes_id")
    private Employes employes;
}
