package com.mehdi.rh_project.Service.imp;

import com.mehdi.rh_project.Service.IRhService;
import com.mehdi.rh_project.Repository.RhRepository;
import com.mehdi.rh_project.dao.Admin;
import com.mehdi.rh_project.dao.Departement;
import com.mehdi.rh_project.Repository.DepartementRepository;
import com.mehdi.rh_project.dao.Employes;
import com.mehdi.rh_project.dao.RH;
import com.mehdi.rh_project.enums.Role;
import com.mehdi.rh_project.request.AuthenticateRequest;
import com.mehdi.rh_project.request.RegisterRequest;
import com.mehdi.rh_project.response.AuthenticationResponse;
import com.mehdi.rh_project.response.MessageResponse;
import com.mehdi.rh_project.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RhService implements IRhService {
    private final RhRepository repository;
    private final DepartementRepository departementRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Override
    public AuthenticationResponse create(RegisterRequest request) {
        RH Rh = repository.findByEmail(request.getEmail());
        if (Rh != null) {
            throw new IllegalArgumentException("Email address is already in use");
        }
        Departement departement = departementRepository.findById(request.getDepartment())
                .orElseThrow(() -> new RuntimeException("Department not found"));
        var user = RH.builder()
                .cin(request.getCin())
                .nom(request.getNom())
                .prenom(request.getPrenom())
                .photo(request.getPhoto())
                .telephone(request.getTelephone())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.RH)
                .departement(departement)
                .build();
        repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .message("Rh created")
                .build();
    }

    @Override
    public AuthenticationResponse authenticate(AuthenticateRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repository.findByEmail(request.getEmail());
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .message("Rh authenticated")
                .build();
    }

    @Override
    public MessageResponse deleteRh(String cin) {
        RH user = repository.findByCin(cin);
        if(user==null)
        {
            return MessageResponse.builder().message("Rh not Found").build();
        }
        repository.delete(user);
        return MessageResponse.builder().message("Rh was Deleted").build();
    }

    @Override
    public MessageResponse updateRh(String cin, RegisterRequest request) {
        RH user = repository.findByCin(cin);
        if(user==null)
        {
            return MessageResponse.builder().message("Rh not Found").build();
        }
        user.setNom(request.getNom());
        user.setPrenom(request.getPrenom());
        user.setPhoto(request.getPhoto());
        user.setTelephone(request.getTelephone());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        if (request.getDepartment() != null) {
            Departement departement = departementRepository.findById(request.getDepartment())
                    .orElseThrow(() -> new RuntimeException("Department not found"));
            user.setDepartement(departement);
        }
        repository.save(user);
        return MessageResponse.builder().message("Rh was Modified").build();
    }

    @Override
    public List<RH> findAllRh() {
        return repository.findAll();
    }

    @Override
    public RH findByCin(String cin) {
        return repository.findByCin(cin);
    }
}
