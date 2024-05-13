package com.mehdi.rh_project.request;

import com.mehdi.rh_project.dao.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PerformanceRequest {
    private Long id;
    private String dateReview;
    private Long score;
    private String description;
    private String employes;
}
