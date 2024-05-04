package com.mehdi.rh_project.Repository;

import com.mehdi.rh_project.dao.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin,String> {
    public Admin findByEmail(String email);
}
