package com.mehdi.rh_project.Controller;

import com.mehdi.rh_project.Service.IAdminService;
import com.mehdi.rh_project.request.AuthenticateRequest;
import com.mehdi.rh_project.response.AuthenticationResponse;
import com.mehdi.rh_project.request.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {
    private final IAdminService IadminService;

    @PostMapping("/create")
    public ResponseEntity<AuthenticationResponse>  create(
            @RequestBody RegisterRequest request
    ) throws Exception {
        return ResponseEntity.ok(IadminService.register(request));
    }

    @RequestMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse>  authenticate(
            @RequestBody AuthenticateRequest request
    ) throws Exception {
        return ResponseEntity.ok(IadminService.authenticate(request));
    }
}
