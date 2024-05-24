package com.mehdi.rh_project.Controller;

import com.mehdi.rh_project.Service.TachesService;
import com.mehdi.rh_project.dao.Taches;
import com.mehdi.rh_project.request.TachesRequest;
import com.mehdi.rh_project.response.MessageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/taches")
@RequiredArgsConstructor
public class TachesController {
    private final TachesService tachesService;

    @PostMapping("/create")
    public ResponseEntity<MessageResponse> create(
            @RequestBody TachesRequest request
    ) throws Exception {
        return ResponseEntity.ok(tachesService.createTache(request));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<MessageResponse> delete(
            @PathVariable Long id
    ) throws Exception{
        return ResponseEntity.ok(tachesService.deleteTache(id));
    }

    @PutMapping("/terminer/{id}")
    public ResponseEntity<MessageResponse> terminer(
            @PathVariable Long id
    ) throws Exception{
        return ResponseEntity.ok(tachesService.tacheTerminer(id));
    }


    @PutMapping("/retard/{id}")
    public ResponseEntity<MessageResponse> Retard(
            @PathVariable Long id
    ) throws Exception{
        return ResponseEntity.ok(tachesService.tacheEnRetard(id));
    }

    @GetMapping("/get/{cin}/employee")
    public ResponseEntity<List<Taches>> Retard(
            @PathVariable String cin
    ) throws Exception{
        return ResponseEntity.ok(tachesService.findByEmployee(cin));
    }
}
