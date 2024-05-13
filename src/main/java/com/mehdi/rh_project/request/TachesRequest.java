package com.mehdi.rh_project.request;

import com.mehdi.rh_project.dao.User;
import com.mehdi.rh_project.enums.Taches_Etat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TachesRequest {
    private Long Id;
    private String description;
    private Taches_Etat etat;
    private String dateDebut;
    private String dateFin;
    private String employes;
}
