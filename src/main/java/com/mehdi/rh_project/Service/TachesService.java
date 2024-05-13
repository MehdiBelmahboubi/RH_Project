package com.mehdi.rh_project.Service;

import com.mehdi.rh_project.dao.Taches;
import com.mehdi.rh_project.request.TachesRequest;
import com.mehdi.rh_project.response.MessageResponse;

import java.util.List;

public interface TachesService {
    public MessageResponse createTache(TachesRequest request) throws Exception;
    public MessageResponse deleteTache(Long id) throws Exception;
    public MessageResponse tacheTerminer(Long id) throws Exception;
    public MessageResponse tacheEnRetard(Long id) throws Exception;
    public List<Taches> findByEmployee(String idEmpl) throws Exception;
}
