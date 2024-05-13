package com.mehdi.rh_project.Repository;

import com.mehdi.rh_project.dao.Taches;
import com.mehdi.rh_project.dao.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TachesRepostory extends JpaRepository<Taches,Long> {
    public List<Taches> findByEmployes(User user);
}
