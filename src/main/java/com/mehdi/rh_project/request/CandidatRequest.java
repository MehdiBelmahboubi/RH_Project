package com.mehdi.rh_project.request;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CandidatRequest {
    private Long id;
    private String nom;
    private String prenom;
    private String email;
    private String cv;
    private String lettreMotivation;
    private String departement;
}
