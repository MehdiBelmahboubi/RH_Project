package com.mehdi.rh_project.Controller;

import com.mehdi.rh_project.Service.CandidatService;
import com.mehdi.rh_project.dao.Candidat;
import com.mehdi.rh_project.request.CandidatRequest;
import com.mehdi.rh_project.response.MessageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/candidate")
@RequiredArgsConstructor
public class CandidatController {
    private final CandidatService CandidateService;

    @PostMapping("/create")
    public ResponseEntity<MessageResponse> create(
            @RequestBody CandidatRequest request
    ) throws Exception {
        return ResponseEntity.ok(CandidateService.createCandidat(request));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<MessageResponse>  delete(
            @PathVariable Long id
    ) throws Exception {
        return ResponseEntity.ok(CandidateService.deleteCandidat(id));
    }

    @GetMapping("/get/all")
    public ResponseEntity<List<Candidat>>  findAll() throws Exception {
        return ResponseEntity.ok(CandidateService.findAll());
    }

    @GetMapping("/get/{id}/departement")
    public ResponseEntity<List<Candidat>>  finByDepartement(
            @PathVariable Long id
    ) throws Exception {
        return ResponseEntity.ok(CandidateService.findByDepartement(id));
    }
}
