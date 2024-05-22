package com.mehdi.rh_project.Repository;

import com.mehdi.rh_project.dao.Departement;
import com.mehdi.rh_project.dao.User;
import com.mehdi.rh_project.enums.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User,String> {
    public User findByEmail(String email);
    public List<User> findByDepartementAndRole(Departement departement, Role role);
    public User findByCin(String cin);

    public List<User> findByRole(Role role);
}
