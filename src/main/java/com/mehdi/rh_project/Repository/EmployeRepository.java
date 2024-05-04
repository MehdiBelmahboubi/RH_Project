package com.mehdi.rh_project.Repository;

import com.mehdi.rh_project.dao.Employes;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployeRepository extends JpaRepository<Employes,String> {
    public Employes findByEmail(String email);

    public Employes findByCin(String cin);
}
