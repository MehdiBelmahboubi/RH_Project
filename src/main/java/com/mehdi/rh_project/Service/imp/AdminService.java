package com.mehdi.rh_project.Service.imp;

import com.mehdi.rh_project.dao.Admin;
import com.mehdi.rh_project.Repository.AdminRepository;
import com.mehdi.rh_project.Service.IAdminService;
import com.mehdi.rh_project.enums.Role;
import com.mehdi.rh_project.request.AuthenticateRequest;
import com.mehdi.rh_project.response.AuthenticationResponse;
import com.mehdi.rh_project.request.RegisterRequest;
import com.mehdi.rh_project.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AdminService implements IAdminService{
    private final AdminRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Override
    public AuthenticationResponse register(RegisterRequest request) throws Exception{
        Admin adminExist = repository.findByEmail(request.getEmail());
        if (adminExist != null) {
            throw new IllegalArgumentException("Email address is already in use");
        }
        var admin = Admin.builder()
                .cin(request.getCin())
                .nom(request.getNom())
                .prenom(request.getPrenom())
                .photo(request.getPhoto())
                .telephone(request.getTelephone())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.ADMIN)
                .build();
        repository.save(admin);
        var jwtToken = jwtService.generateToken(admin);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .message("Admin created")
                .build();
    }

    @Override
    public AuthenticationResponse authenticate(AuthenticateRequest request) throws Exception {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var admin = repository.findByEmail(request.getEmail());
        var jwtToken = jwtService.generateToken(admin);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .message("Admin authenticated")
                .build();
    }
}
