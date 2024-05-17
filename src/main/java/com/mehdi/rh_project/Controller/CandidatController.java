package com.mehdi.rh_project.Controller;

import com.mehdi.rh_project.Repository.CandidatRepository;
import com.mehdi.rh_project.Service.CandidatService;
import com.mehdi.rh_project.dao.Candidat;
import com.mehdi.rh_project.response.MessageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

@RestController
@RequestMapping("/api/candidate")
@RequiredArgsConstructor
public class CandidatController {
    private final CandidatRepository repository;
    private final CandidatService CandidateService;

    @PostMapping(value = "/create",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<MessageResponse> create(
            @RequestParam("cv") MultipartFile cv,
            @RequestParam("lettreMotivation") MultipartFile lettreMotivation,
            String nom,
            String prenom,
            String email,
            String departement
            ) throws Exception {
        return ResponseEntity.ok(CandidateService.createCandidat(cv,lettreMotivation,nom,prenom,email,departement));
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

    @GetMapping(value = "/cv/{id}/candidature",produces = MediaType.APPLICATION_PDF_VALUE)
    public byte[] getcvFile(@PathVariable long id) throws Exception {
        return CandidateService.getcvFile(id);
    }

    @GetMapping(value = "/lettre/{id}/candidature",produces = MediaType.APPLICATION_PDF_VALUE)
    public byte[] getlettreFile(@PathVariable long id) throws Exception {
        return CandidateService.getlettreFile(id);
    }

}
