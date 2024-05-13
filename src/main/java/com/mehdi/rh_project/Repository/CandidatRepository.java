package com.mehdi.rh_project.Repository;

import com.mehdi.rh_project.dao.Candidat;
import com.mehdi.rh_project.dao.Departement;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CandidatRepository extends JpaRepository<Candidat,Long> {
    public Candidat findByEmail(String email);
    public List<Candidat> findByDepartement(Departement departement);
}
