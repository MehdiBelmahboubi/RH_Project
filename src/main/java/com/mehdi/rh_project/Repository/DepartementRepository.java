package com.mehdi.rh_project.Repository;

import com.mehdi.rh_project.dao.Departement;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DepartementRepository extends JpaRepository<Departement,Long> {
    Optional<Departement> findById(Long id);
}
