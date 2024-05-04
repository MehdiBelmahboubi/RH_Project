package com.mehdi.rh_project.dao;

import com.fasterxml.jackson.annotation.JsonFilter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mehdi.rh_project.enums.Role;
import com.mehdi.rh_project.dao.Departement;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@ToString
@SuperBuilder
public class RH extends User {

    @Enumerated(EnumType.STRING)
    private Role role = Role.RH;

    @ManyToOne
    @JoinColumn(name = "departement_id")
    private Departement departement;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

}
