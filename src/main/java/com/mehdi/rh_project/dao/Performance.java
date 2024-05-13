package com.mehdi.rh_project.dao;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@NoArgsConstructor @AllArgsConstructor @Setter @Getter @ToString @Builder
public class Performance {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private String dateReview;

    @Column(nullable = false)
    private Long score;

    @Column(nullable = false)
    private String description;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "employes_id")
    private User employes;
}
