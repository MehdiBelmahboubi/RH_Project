package com.mehdi.rh_project.request;

import com.mehdi.rh_project.enums.Conges_Etat;
import com.mehdi.rh_project.enums.Conges_Type;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CongeRequest {
    private Long id;
    private String dateDemande;
    private String dateDebut;
    private String dateFin;
    private Long periode;
    private Conges_Type type;
    private Conges_Etat etat;
    private String employes;
}
