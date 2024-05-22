package com.mehdi.rh_project.request;

import com.mehdi.rh_project.dao.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class HoraireRequest {
    private Long heureTravaille;
    private String employes;
}
