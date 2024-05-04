package com.mehdi.rh_project.Controller;

import com.mehdi.rh_project.Service.IRhService;
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
@RequestMapping("/api/rh")
@RequiredArgsConstructor
public class RhController {
    private final IRhService IrhService;

    @PostMapping("/create")
    public ResponseEntity<AuthenticationResponse>  create(
            @RequestBody RegisterRequest request
    ) throws Exception {
        return ResponseEntity.ok(IrhService.create(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse>  authenticate(
            @RequestBody AuthenticateRequest request
    ) throws Exception {
        return ResponseEntity.ok(IrhService.authenticate(request));
    }

    @DeleteMapping("/delete/{cin}")
    public ResponseEntity<MessageResponse>  delete(
            @PathVariable String cin
    ) throws Exception {
        return ResponseEntity.ok(IrhService.deleteRh(cin));
    }

    @PutMapping("/update/{cin}")
    public ResponseEntity<MessageResponse>  delete(
            @RequestBody RegisterRequest request,
            @PathVariable String cin
    ) throws Exception {
        return ResponseEntity.ok(IrhService.updateRh(cin,request));
    }

    @GetMapping("/get/all")
    public ResponseEntity<List <RH>> getAll() throws Exception {
        List<RH> Rhs = IrhService.findAllRh();
        return ResponseEntity.ok(Rhs);
    }

    @PutMapping("/get/{cin}")
    public ResponseEntity<RH> getAll(
            @PathVariable String cin
    ) throws Exception {
        return ResponseEntity.ok(IrhService.findByCin(cin));
    }
}
