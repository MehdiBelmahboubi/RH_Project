package com.mehdi.rh_project.Service.imp;

import com.mehdi.rh_project.Repository.DepartementRepository;
import com.mehdi.rh_project.Repository.UserRepository;
import com.mehdi.rh_project.dao.Departement;
import com.mehdi.rh_project.dao.User;
import com.mehdi.rh_project.enums.Contrat_Type;
import com.mehdi.rh_project.enums.Fonction_Type;
import com.mehdi.rh_project.enums.Role;
import com.mehdi.rh_project.request.UserRequest;
import com.mehdi.rh_project.response.AuthenticationResponse;
import com.mehdi.rh_project.response.MessageResponse;
import com.mehdi.rh_project.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class IUserService implements com.mehdi.rh_project.Service.UserService {
    private final UserRepository repository;
    private final DepartementRepository departementRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    @Override
    public AuthenticationResponse createUser(MultipartFile photo , String cin, String cnss, Contrat_Type contrat, String dateNsc, String dateRecrutement,
                                             String departement, String email, Fonction_Type fonction, String nom, String password, String prenom,
                                             float salaire, String telephone, Role role) throws IOException {
        User user = repository.findByEmail(email);
        if (user != null) {
            throw new IllegalArgumentException("Email address is already in use");
        }
        Departement departement1 = departementRepository.findByNom(departement);
        if(departement1==null){
            return AuthenticationResponse.builder().message("Departement Not Found").build();
        }

        String fileName = StringUtils.cleanPath(photo.getOriginalFilename());
        if(fileName.contains("..")){
            return AuthenticationResponse.builder().message("Not a valid Image").build();
        }

        var usercreate = User.builder()
                .cin(cin)
                .nom(nom)
                .prenom(prenom)
                .photo(Base64.getEncoder().encodeToString(photo.getBytes()))
                .cnss(cnss)
                .dateNsc(dateNsc)
                .dateRecrutement(dateRecrutement)
                .contrat(contrat)
                .fonction(fonction)
                .salaire(salaire)
                .telephone(telephone)
                .email(email)
                .password(passwordEncoder.encode(password))
                .role(role)
                .departement(departement1)
                .build();
        repository.save(usercreate);
        var jwtToken = jwtService.generateToken(usercreate);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .nom(usercreate.getNom())
                .message("User created")
                .role(usercreate.getRole())
                .build();
    }

    @Override
    public MessageResponse deleteUser(String cin) {
        User user = repository.findByCin(cin);
        if(user==null)
        {
            return MessageResponse.builder().message("User not Found").build();
        }
        repository.delete(user);
        return MessageResponse.builder().message("User was Deleted").build();
    }

    @Override
    public MessageResponse updateUser(String cin, UserRequest request) {
        Departement departement = departementRepository.findByNom(request.getDepartement());
        User user = repository.findByCin(cin);
        if(user==null)
        {
            return MessageResponse.builder().message("User not Found").build();
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
        user.setRole(request.getRole());

        if (departement == null) {
            return MessageResponse.builder().message("Departement Not Found").build();
        }
        user.setDepartement(departement);
        repository.save(user);
        return MessageResponse.builder().message("User Was Modified").build();
    }

    @Override
    public List<User> findAllUser() {
        return repository.findAll();
    }

    @Override
    public List<User> findByDepartement(String NomDepartement) throws Exception {
        Departement departement = departementRepository.findByNom(NomDepartement);
        Role role = Role.EMPLOYE;
        return repository.findByDepartementAndRole(departement,role);
    }
}
