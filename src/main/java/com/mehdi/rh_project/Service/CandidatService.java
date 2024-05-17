package com.mehdi.rh_project.Service;

import com.mehdi.rh_project.dao.Candidat;
import com.mehdi.rh_project.response.MessageResponse;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface CandidatService {
    public MessageResponse createCandidat( MultipartFile cv,MultipartFile lettreMotivation,String nom,String prenom,String email,String departement) throws Exception;
    public MessageResponse deleteCandidat(Long id) throws Exception;
    public List<Candidat> findAll() throws Exception;
    public List<Candidat> findByDepartement(Long idDep) throws Exception;
    public byte[] getcvFile(long idCandidat) throws  Exception;
    public byte[] getlettreFile(long idCandidat) throws  Exception;
}
