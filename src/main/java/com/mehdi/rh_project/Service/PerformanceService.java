package com.mehdi.rh_project.Service;

import com.mehdi.rh_project.Repository.PerformanceRepostory;
import com.mehdi.rh_project.dao.Performance;
import com.mehdi.rh_project.request.PerformanceRequest;
import com.mehdi.rh_project.response.MessageResponse;

import java.util.List;

public interface PerformanceService {
    public MessageResponse createPerformance(PerformanceRequest request) throws Exception;
    public MessageResponse deletePerformance(Long id) throws Exception;
    public List<Performance> findByIdEmp(String idEmp) throws Exception;
}
