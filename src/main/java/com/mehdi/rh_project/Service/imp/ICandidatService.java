package com.mehdi.rh_project.Service.imp;

import com.mehdi.rh_project.Repository.CandidatRepository;
import com.mehdi.rh_project.Repository.DepartementRepository;
import com.mehdi.rh_project.Service.CandidatService;
import com.mehdi.rh_project.dao.Candidat;
import com.mehdi.rh_project.dao.Departement;
import com.mehdi.rh_project.request.CandidatRequest;
import com.mehdi.rh_project.response.MessageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ICandidatService implements CandidatService {
    private final CandidatRepository repository;
    private final DepartementRepository departementRepository;
    @Override
    public MessageResponse createCandidat(CandidatRequest request) {
        Departement departement = departementRepository.findByNom(request.getDepartement());
        if(departement==null){
            return MessageResponse.builder().message("Departement Not Found").build();
        }
        Candidat candidat = repository.findByEmail(request.getEmail());

        if(candidat!=null){
            return MessageResponse.builder().message("Already have a Submiting").build();
        }
        var candidatcreate = Candidat.builder()
                .nom(request.getNom())
                .prenom(request.getPrenom())
                .email(request.getEmail())
                .cv(request.getCv())
                .lettreMotivation(request.getLettreMotivation())
                .departement(departement)
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
