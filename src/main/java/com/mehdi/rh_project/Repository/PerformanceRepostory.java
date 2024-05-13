package com.mehdi.rh_project.Repository;

import com.mehdi.rh_project.dao.Performance;
import com.mehdi.rh_project.dao.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PerformanceRepostory extends JpaRepository<Performance,Long> {
    public List<Performance> findByEmployes(User user);
}
