package com.mehdi.rh_project.Controller;


import com.mehdi.rh_project.Service.UserService;
import com.mehdi.rh_project.dao.User;
import com.mehdi.rh_project.request.UserRequest;
import com.mehdi.rh_project.response.AuthenticationResponse;
import com.mehdi.rh_project.response.MessageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService UserService;

    @PostMapping("/create")
    public ResponseEntity<AuthenticationResponse> create(
            @RequestBody UserRequest request
    ) throws Exception {
        return ResponseEntity.ok(UserService.createUser(request));
    }

    @DeleteMapping("/delete/{cin}")
    public ResponseEntity<MessageResponse>  delete(
            @PathVariable String cin
    ) throws Exception {
        return ResponseEntity.ok(UserService.deleteUser(cin));
    }

    @PutMapping("/update/{cin}")
    public ResponseEntity<MessageResponse>  delete(
            @RequestBody UserRequest request,
            @PathVariable String cin
    ) throws Exception {
        return ResponseEntity.ok(UserService.updateUser(cin,request));
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
