package com.mehdi.rh_project.Repository;

import com.mehdi.rh_project.dao.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,String> {
    public User findByEmail(String email);

    public User findByCin(String cin);
}
