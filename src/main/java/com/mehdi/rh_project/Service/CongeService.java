package com.mehdi.rh_project.Service;

import com.mehdi.rh_project.dao.Conges;
import com.mehdi.rh_project.request.CongeRequest;
import com.mehdi.rh_project.response.MessageResponse;

import java.util.List;

public interface CongeService {
    public MessageResponse createConge(CongeRequest request) throws Exception;
    public MessageResponse deleteConge(Long id) throws Exception;
    public MessageResponse acceptConge(Long id) throws Exception;
    public MessageResponse declineConge(Long id) throws Exception;
    public List<Conges> findByEmployee(String idEmpl) throws Exception;
}
