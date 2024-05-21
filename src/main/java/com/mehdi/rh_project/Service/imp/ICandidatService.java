package com.mehdi.rh_project.Service.imp;

import com.mehdi.rh_project.Repository.CandidatRepository;
import com.mehdi.rh_project.Repository.DepartementRepository;
import com.mehdi.rh_project.Service.CandidatService;
import com.mehdi.rh_project.dao.Candidat;
import com.mehdi.rh_project.dao.Departement;
import com.mehdi.rh_project.enums.Etat_Candidature;
import com.mehdi.rh_project.response.MessageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ICandidatService implements CandidatService {
    private final CandidatRepository repository;
    private final DepartementRepository departementRepository;
    @Override
    public MessageResponse createCandidat( MultipartFile cv, MultipartFile lettreMotivation,String nom,String prenom,String email,String departement) throws IOException {
        Departement defartementfind = departementRepository.findByNom(departement);
        if (defartementfind == null) {
            return MessageResponse.builder().message("Departement Not Found").build();
        }
        Candidat candidat = repository.findByEmail(email);

        if (candidat != null) {
            return MessageResponse.builder().message("Already have a Submiting").build();
        }

        var candidatcreate = Candidat.builder()
                .nom(nom)
                .prenom(prenom)
                .email(email)
                .etat(Etat_Candidature.EnCours)
                .cv(cv.getBytes())
                .lettreMotivation(lettreMotivation.getBytes())
                .departement(defartementfind)
                .build();
        repository.save(candidatcreate);
        return MessageResponse.builder().message("Candidature Submited").build();
    }


    @Override
    public MessageResponse deleteCandidat(Long id) {
        Candidat candidat = null;
        Optional<Candidat> Ocandidat = repository.findById(id);
        if(Ocandidat == null)
        {
            return MessageResponse.builder().message("Candidature Not Found").build();
        } else if (Ocandidat.isPresent()) {
            candidat=Ocandidat.get();
        }
        repository.delete(candidat);
        return MessageResponse.builder().message("Candidature Deleted").build();
    }

    @Override
    public MessageResponse acceptCandidat(Long id) throws Exception {
        Candidat candidat = null;
        Optional<Candidat> Ocandidat = repository.findById(id);
        if(Ocandidat == null)
        {
            return MessageResponse.builder().message("Candidature Not Found").build();
        } else if (Ocandidat.isPresent()) {
            candidat=Ocandidat.get();
        }
        candidat.setEtat(Etat_Candidature.Accepter);
        repository.save(candidat);
        return MessageResponse.builder().message("Candidat Accepted").build();
    }

    @Override
    public List<Candidat> findAll() {
        return repository.findAll();
    }

    @Override
    public List<Candidat> findByDepartement(Long idDep) {
        Departement departement = null;
        Optional<Departement> Odepartement = departementRepository.findById(idDep);
        if(Odepartement.isPresent())
        {
            departement=Odepartement.get();
        }
        return repository.findByDepartement(departement);
    }

}
