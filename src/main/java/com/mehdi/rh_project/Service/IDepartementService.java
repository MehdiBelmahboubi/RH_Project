package com.mehdi.rh_project.Service;

import com.mehdi.rh_project.dao.Departement;
import com.mehdi.rh_project.request.DepartementRequest;

import java.util.List;

public interface IDepartementService {
    public Departement createDepartement(DepartementRequest request);
    public List<Departement> findAllDepartement();
    public Departement findById(Long id);
}
