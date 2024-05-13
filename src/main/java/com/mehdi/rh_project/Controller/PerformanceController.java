package com.mehdi.rh_project.Controller;

import com.mehdi.rh_project.Service.PerformanceService;
import com.mehdi.rh_project.dao.Performance;
import com.mehdi.rh_project.request.PerformanceRequest;
import com.mehdi.rh_project.response.MessageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/performance")
@RequiredArgsConstructor
public class PerformanceController {
    private final PerformanceService performanceService;

    @PostMapping("/create")
    public ResponseEntity<MessageResponse> create(
            @RequestBody PerformanceRequest request
    ) throws Exception{
        return ResponseEntity.ok(performanceService.createPerformance(request));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<MessageResponse> delete(
            @PathVariable Long id
    ) throws Exception{
        return ResponseEntity.ok(performanceService.deletePerformance(id));
    }

    @GetMapping("/get/{id}/employee")
    public ResponseEntity<List<Performance>> findByEmployee(
            @PathVariable String id
    ) throws Exception{
        return ResponseEntity.ok(performanceService.findByIdEmp(id));
    }
}
