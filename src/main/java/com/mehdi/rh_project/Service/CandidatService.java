package com.mehdi.rh_project.Service;

import com.mehdi.rh_project.dao.Candidat;
import com.mehdi.rh_project.request.CandidatRequest;
import com.mehdi.rh_project.response.MessageResponse;

import java.util.List;

public interface CandidatService {
    public MessageResponse createCandidat(CandidatRequest request);
    public MessageResponse deleteCandidat(Long id);
    public List<Candidat> findAll();
    public List<Candidat> findByDepartement(Long idDep);
}
