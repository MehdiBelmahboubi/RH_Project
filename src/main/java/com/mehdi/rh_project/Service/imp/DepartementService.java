package com.mehdi.rh_project.Service.imp;

import com.mehdi.rh_project.Service.IDepartementService;
import com.mehdi.rh_project.Repository.DepartementRepository;
import com.mehdi.rh_project.dao.Departement;
import com.mehdi.rh_project.request.DepartementRequest;
import com.mehdi.rh_project.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DepartementService implements IDepartementService {
    private final DepartementRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Override
    public Departement createDepartement(DepartementRequest request) {
        Departement departement = Departement.builder()
                .id(request.getId())
                .nom(request.getNom())
                .build();
        repository.save(departement);
        return departement;
    }

    @Override
    public List<Departement> findAllDepartement() {
        return null;
    }

    @Override
    public Departement findById(Long id) {
        return null;
    }

}
