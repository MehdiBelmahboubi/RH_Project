package com.mehdi.rh_project.Controller;

import com.mehdi.rh_project.Service.AuthenticateService;
import com.mehdi.rh_project.request.AuthenticateRequest;
import com.mehdi.rh_project.response.AuthenticationResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class AuthController {
    private final AuthenticateService rhService;
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticateRequest request
    ) throws Exception {
        return ResponseEntity.ok(rhService.authenticate(request));
    }
}
