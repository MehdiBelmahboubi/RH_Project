package com.mehdi.rh_project.Controller;

import com.mehdi.rh_project.Service.IEmployeService;
import com.mehdi.rh_project.dao.Employes;
import com.mehdi.rh_project.dao.RH;
import com.mehdi.rh_project.request.AuthenticateRequest;
import com.mehdi.rh_project.request.RegisterRequest;
import com.mehdi.rh_project.response.AuthenticationResponse;
import com.mehdi.rh_project.response.MessageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employe")
@RequiredArgsConstructor
public class EmployeController {
    private final IEmployeService IemployeService;

    @PostMapping("/create")
    public ResponseEntity<AuthenticationResponse> create(
            @RequestBody RegisterRequest request
    ){
        return ResponseEntity.ok(IemployeService.createEmployes(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse>  authenticate(
            @RequestBody AuthenticateRequest request
    ){
        return ResponseEntity.ok(IemployeService.authenticate(request));
    }

    @DeleteMapping("/delete/{cin}")
    public ResponseEntity<MessageResponse>  delete(
            @PathVariable String cin
    ) throws Exception {
        return ResponseEntity.ok(IemployeService.deleteEmloyes(cin));
    }

    @PutMapping("/update/{cin}")
    public ResponseEntity<MessageResponse>  delete(
            @RequestBody RegisterRequest request,
            @PathVariable String cin
    ) throws Exception {
        return ResponseEntity.ok(IemployeService.updateEmployes(cin,request));
    }

    @GetMapping("/get/all")
    public ResponseEntity<List<Employes>> getAll() throws Exception {
        List<Employes> Employes = IemployeService.findAllEmployes();
        return ResponseEntity.ok(Employes);
    }

    @PutMapping("/get/{cin}")
    public ResponseEntity<Employes> getAll(
            @PathVariable String cin
    ) throws Exception {
        return ResponseEntity.ok(IemployeService.findByCin(cin));
    }
}
