package com.mehdi.rh_project.Repository;

import com.mehdi.rh_project.dao.RH;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RhRepository extends JpaRepository<RH,String> {
    public RH findByEmail(String email);
    public RH findByCin(String cin);
}
