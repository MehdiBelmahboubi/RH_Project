package com.mehdi.rh_project.Service;

import com.mehdi.rh_project.dao.Departement;
import com.mehdi.rh_project.request.DepartementRequest;
import com.mehdi.rh_project.response.MessageResponse;

import java.util.List;

public interface DepartementService {
    public Departement createDepartement(DepartementRequest request) throws Exception;
    public MessageResponse deleteDepartement(Long id);
    public List<Departement> findAllDepartement() throws Exception;
    public Departement findById(Long id) throws Exception;
}
