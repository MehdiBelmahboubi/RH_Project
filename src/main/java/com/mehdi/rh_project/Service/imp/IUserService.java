package com.mehdi.rh_project.Service.imp;

import com.mehdi.rh_project.Repository.DepartementRepository;
import com.mehdi.rh_project.Repository.UserRepository;
import com.mehdi.rh_project.dao.Departement;
import com.mehdi.rh_project.dao.User;
import com.mehdi.rh_project.request.UserRequest;
import com.mehdi.rh_project.response.AuthenticationResponse;
import com.mehdi.rh_project.response.MessageResponse;
import com.mehdi.rh_project.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class IUserService implements com.mehdi.rh_project.Service.UserService {
    private final UserRepository repository;
    private final DepartementRepository departementRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    @Override
    public AuthenticationResponse createUser(UserRequest request) {
        User user = repository.findByEmail(request.getEmail());
        if (user != null) {
            throw new IllegalArgumentException("Email address is already in use");
        }
        Departement departement = departementRepository.findByNom(request.getDepartement());
        if(departement==null){
            return AuthenticationResponse.builder().message("Departement Not Found").build();
        }
        var usercreate = User.builder()
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
                .role(request.getRole())
                .departement(departement)
                .build();
        repository.save(usercreate);
        var jwtToken = jwtService.generateToken(usercreate);
        return AuthenticationResponse.builder()
                .token(jwtToken)
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
}
