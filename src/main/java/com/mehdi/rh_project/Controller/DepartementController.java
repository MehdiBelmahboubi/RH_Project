package com.mehdi.rh_project.Controller;

import com.mehdi.rh_project.Service.IDepartementService;
import com.mehdi.rh_project.Service.imp.AdminService;
import com.mehdi.rh_project.Service.imp.DepartementService;
import com.mehdi.rh_project.dao.Departement;
import com.mehdi.rh_project.request.DepartementRequest;
import com.mehdi.rh_project.security.JwtService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/departement")
@RequiredArgsConstructor
public class DepartementController {
    private final IDepartementService IDepartementService;
    private final AdminService adminService;
    private final JwtService jwtService;

    @PostMapping("/create")
    public ResponseEntity<Departement> create(
            @RequestBody DepartementRequest request
            ) throws Exception {
        return ResponseEntity.ok(IDepartementService.createDepartement(request));
    }
}
