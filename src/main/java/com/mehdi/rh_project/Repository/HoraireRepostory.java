package com.mehdi.rh_project.Repository;

import com.mehdi.rh_project.dao.Horaire;
import com.mehdi.rh_project.dao.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HoraireRepostory extends JpaRepository<Horaire,Long> {
    public List<Horaire> findByEmployes(User user);
}
