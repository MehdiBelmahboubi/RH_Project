package com.mehdi.rh_project.Controller;

import com.mehdi.rh_project.Service.DepartementService;
import com.mehdi.rh_project.dao.Departement;
import com.mehdi.rh_project.request.DepartementRequest;
import com.mehdi.rh_project.response.MessageResponse;
import com.mehdi.rh_project.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/departement")
@RequiredArgsConstructor
public class DepartementController {
    private final DepartementService DepartementService;

    @PostMapping("/create")
    public ResponseEntity<Departement> create(
            @RequestBody DepartementRequest request
            ) throws Exception {
        return ResponseEntity.ok(DepartementService.createDepartement(request));
    }

    @PutMapping("/delete/{id}")
    public ResponseEntity<MessageResponse> create(
            @PathVariable Long id
    ) throws Exception {
        return ResponseEntity.ok(DepartementService.deleteDepartement(id));
    }

    @GetMapping("/get/all")
    public ResponseEntity<List<Departement>> findAll() throws Exception{
        List<Departement> departements = DepartementService.findAllDepartement();
        return ResponseEntity.ok(departements);
    }

    @PutMapping("/get/{id}")
    public ResponseEntity<Departement> findById(
            @PathVariable Long id
    ) throws Exception{
        Departement departement = DepartementService.findById(id);
        return ResponseEntity.ok(departement);
    }
}
