package com.mehdi.rh_project.Service;

import com.mehdi.rh_project.dao.Horaire;
import com.mehdi.rh_project.request.HoraireRequest;
import com.mehdi.rh_project.response.MessageResponse;

import java.util.List;

public interface HoraireService {
    public MessageResponse create(HoraireRequest request) throws Exception;
    public MessageResponse delete(Long id) throws Exception;
    public List<Horaire> findByEmployee(String idEmp) throws Exception;
}
