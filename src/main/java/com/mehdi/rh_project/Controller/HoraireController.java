package com.mehdi.rh_project.Controller;

import com.mehdi.rh_project.Service.HoraireService;
import com.mehdi.rh_project.dao.Horaire;
import com.mehdi.rh_project.request.HoraireRequest;
import com.mehdi.rh_project.response.MessageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/horaire")
@RequiredArgsConstructor
public class HoraireController {
    private final HoraireService horaireService;
    @PostMapping("/create")
    public ResponseEntity<MessageResponse> create(
            @RequestBody HoraireRequest request
    ) throws Exception {
        return ResponseEntity.ok(horaireService.create(request));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<MessageResponse>  delete(
            @PathVariable Long id
    ) throws Exception {
        return ResponseEntity.ok(horaireService.delete(id));
    }

    @GetMapping("/get/{cin}/employee")
    public ResponseEntity<List<Horaire>> findByEmployee(
            @PathVariable String cin
    ) throws Exception {
        return ResponseEntity.ok(horaireService.findByEmployee(cin));
    }
}
