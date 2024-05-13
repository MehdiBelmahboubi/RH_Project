package com.mehdi.rh_project.Repository;

import com.mehdi.rh_project.dao.Departement;
import org.springframework.data.jpa.repository.JpaRepository;



public interface DepartementRepository extends JpaRepository<Departement,Long> {
    public Departement findByNom(String nom);
}
