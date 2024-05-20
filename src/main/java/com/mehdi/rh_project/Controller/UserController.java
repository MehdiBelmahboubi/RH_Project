package com.mehdi.rh_project.Controller;


import com.mehdi.rh_project.Service.UserService;
import com.mehdi.rh_project.dao.User;
import com.mehdi.rh_project.enums.Contrat_Type;
import com.mehdi.rh_project.enums.Fonction_Type;
import com.mehdi.rh_project.enums.Role;
import com.mehdi.rh_project.request.UserRequest;
import com.mehdi.rh_project.response.AuthenticationResponse;
import com.mehdi.rh_project.response.MessageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService UserService;

    @PostMapping(value = "/create", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<AuthenticationResponse> create(
            @RequestParam("photo") MultipartFile photo,
            @RequestParam("cin") String cin,
            @RequestParam("cnss") String cnss,
            @RequestParam("contrat") Contrat_Type contrat,
            @RequestParam("dateNsc") String dateNsc,
            @RequestParam("dateRecrutement") String dateRecrutement,
            @RequestParam("departement") String departement,
            @RequestParam("email") String email,
            @RequestParam("fonction") Fonction_Type fonction,
            @RequestParam("nom") String nom,
            @RequestParam("password") String password,
            @RequestParam("prenom") String prenom,
            @RequestParam("salaire") float salaire,
            @RequestParam("telephone") String telephone,
            @RequestParam("role") Role role
    ) throws Exception {
        return ResponseEntity.ok(UserService.createUser(photo, cin, cnss, contrat, dateNsc, dateRecrutement, departement, email, fonction, nom, password, prenom, salaire, telephone, role));
    }

    @DeleteMapping("/delete/{cin}")
    public ResponseEntity<MessageResponse>  delete(
            @PathVariable String cin
    ) throws Exception {
        return ResponseEntity.ok(UserService.deleteUser(cin));
    }

    @PutMapping("/update/{cin}")
    public ResponseEntity<MessageResponse>  update(
            @RequestParam("photo") MultipartFile photo,
            @RequestParam("cin") String cin,
            @RequestParam("cnss") String cnss,
            @RequestParam("contrat") Contrat_Type contrat,
            @RequestParam("dateNsc") String dateNsc,
            @RequestParam("dateRecrutement") String dateRecrutement,
            @RequestParam("departement") String departement,
            @RequestParam("email") String email,
            @RequestParam("fonction") Fonction_Type fonction,
            @RequestParam("nom") String nom,
            @RequestParam("password") String password,
            @RequestParam("prenom") String prenom,
            @RequestParam("salaire") float salaire,
            @RequestParam("telephone") String telephone,
            @RequestParam("role") Role role
    ) throws Exception {
        return ResponseEntity.ok(UserService.updateUser(photo, cin, cnss, contrat, dateNsc, dateRecrutement, departement, email, fonction, nom, password, prenom, salaire, telephone, role));
    }

    @GetMapping("/get/all")
    public ResponseEntity<List<User>> getAll() throws Exception {
        List<User> Users = UserService.findAllUser();
        return ResponseEntity.ok(Users);
    }

    @GetMapping("/get/{nom}/departement")
    public ResponseEntity<List<User>> getByDepartement(String nom) throws Exception {
        List<User> user = UserService.findByDepartement(nom);
        return ResponseEntity.ok(user);
    }
}
