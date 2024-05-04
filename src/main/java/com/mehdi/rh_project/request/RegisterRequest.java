package com.mehdi.rh_project.request;

import com.mehdi.rh_project.enums.Contrat_Type;
import com.mehdi.rh_project.enums.Fonction_Type;
import com.mehdi.rh_project.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String cin;
    private String nom;
    private String prenom;
    private String photo;
    private String dateNsc;
    private int telephone;
    private String cnss;
    private Fonction_Type fonction;
    private String dateRecrutement;
    private float salaire;
    private Contrat_Type contrat;
    private String email;
    private String password;
    private Long department;
    private Role role;
}
