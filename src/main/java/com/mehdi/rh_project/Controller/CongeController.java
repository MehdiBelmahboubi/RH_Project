package com.mehdi.rh_project.Controller;

import com.mehdi.rh_project.Service.CongeService;
import com.mehdi.rh_project.dao.Conges;
import com.mehdi.rh_project.request.CongeRequest;
import com.mehdi.rh_project.response.MessageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/conge")
@RequiredArgsConstructor
public class CongeController {
    private final CongeService congeService;

    @PostMapping("/create")
    public ResponseEntity<MessageResponse> create(
            @RequestBody CongeRequest request
    ) throws Exception {
        return ResponseEntity.ok(congeService.createConge(request));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<MessageResponse>  delete(
            @PathVariable Long id
    ) throws Exception {
        return ResponseEntity.ok(congeService.deleteConge(id));
    }

    @PutMapping("/accepte/{id}")
    public ResponseEntity<MessageResponse> accepte(
            @PathVariable Long id
    ) throws Exception {
        return ResponseEntity.ok(congeService.acceptConge(id));
    }

    @PutMapping("/decline/{id}")
    public ResponseEntity<MessageResponse> decline(
            @PathVariable Long id
    ) throws Exception {
        return ResponseEntity.ok(congeService.declineConge(id));
    }

    @GetMapping("/get/{id}/employee")
    public ResponseEntity<List<Conges>> findByEmployee(
            @PathVariable String id
    ) throws Exception {
        return ResponseEntity.ok(congeService.findByEmployee(id));
    }
}
