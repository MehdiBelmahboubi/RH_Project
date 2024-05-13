package com.mehdi.rh_project.Repository;

import com.mehdi.rh_project.dao.Conges;
import com.mehdi.rh_project.dao.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CongeRepostory extends JpaRepository<Conges,Long> {
    public List<Conges> findByEmployes(User user);
}
