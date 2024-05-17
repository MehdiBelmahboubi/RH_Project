package com.mehdi.rh_project.response;

import com.mehdi.rh_project.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
    private String nom;
    private String prenom;
    private String fonction;
    private String message;
    private String token;
    private Role role;
}
