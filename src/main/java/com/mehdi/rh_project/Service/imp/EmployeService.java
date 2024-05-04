package com.mehdi.rh_project.Service.imp;

import com.mehdi.rh_project.Repository.DepartementRepository;
import com.mehdi.rh_project.Service.IEmployeService;
import com.mehdi.rh_project.Repository.EmployeRepository;
import com.mehdi.rh_project.dao.Admin;
import com.mehdi.rh_project.dao.Departement;
import com.mehdi.rh_project.dao.Employes;
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
public class EmployeService implements IEmployeService {
    private final EmployeRepository repository;
    private final DepartementRepository departementRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    @Override
    public AuthenticationResponse createEmployes(RegisterRequest request) {
        Employes user = repository.findByEmail(request.getEmail());
        if (user != null) {
            throw new IllegalArgumentException("Email address is already in use");
        }
        Departement departement = departementRepository.findById(request.getDepartment())
                .orElseThrow(() -> new RuntimeException("Department not found"));
        var employes = Employes.builder()
                .cin(request.getCin())
                .nom(request.getNom())
                .prenom(request.getPrenom())
                .photo(request.getPhoto())
                .cnss(request.getCnss())
                .dateNsc(request.getDateNsc())
                .dateRecrutement(request.getDateRecrutement())
                .contrat(request.getContrat())
                .fonction(request.getFonction())
                .salaire(request.getSalaire())
                .telephone(request.getTelephone())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.EMPLOYE)
                .departement(departement)
                .build();
        repository.save(employes);
        var jwtToken = jwtService.generateToken(employes);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .message("Employee created")
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
        var employes = repository.findByEmail(request.getEmail());
        var jwtToken = jwtService.generateToken(employes);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .message("Employee authenticated")
                .build();
    }

    @Override
    public MessageResponse deleteEmloyes(String cin) {
        Employes user = repository.findByCin(cin);
        if(user==null)
        {
            return MessageResponse.builder().message("Employee not Found").build();
        }
        repository.delete(user);
        return MessageResponse.builder().message("Employee was Deleted").build();
    }

    @Override
    public MessageResponse updateEmployes(String cin, RegisterRequest request) {
        Employes user = repository.findByCin(cin);
        if(user==null)
        {
            return MessageResponse.builder().message("Employee not Found").build();
        }
        user.setNom(request.getNom());
        user.setPrenom(request.getPrenom());
        user.setPhoto(request.getPhoto());
        user.setDateNsc(request.getDateNsc());
        user.setTelephone(request.getTelephone());
        user.setCnss(request.getCnss());
        user.setFonction(request.getFonction());
        user.setDateRecrutement(request.getDateRecrutement());
        user.setSalaire(request.getSalaire());
        user.setContrat(request.getContrat());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        if (request.getDepartment() != null) {
            Departement departement = departementRepository.findById(request.getDepartment())
                    .orElseThrow(() -> new RuntimeException("Department not found"));
            user.setDepartement(departement);
        }
        repository.save(user);
        return MessageResponse.builder().message("Employee Was Modified").build();
    }

    @Override
    public List<Employes> findAllEmployes() {
        return repository.findAll();
    }

    @Override
    public Employes findByCin(String cin) {
        return repository.findByCin(cin);
    }
}
