package com.mehdi.rh_project.Service.imp;

import com.mehdi.rh_project.Repository.DepartementRepository;
import com.mehdi.rh_project.Service.DepartementService;
import com.mehdi.rh_project.dao.Departement;
import com.mehdi.rh_project.request.DepartementRequest;
import com.mehdi.rh_project.response.MessageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class IDepartementService implements DepartementService {
    private final DepartementRepository repository;

    @Override
    public Departement createDepartement(DepartementRequest request) {
        Departement departement = Departement.builder()
                .id(request.getId())
                .nom(request.getNom())
                .build();
        repository.save(departement);
        return departement;
    }

    @Override
    public MessageResponse deleteDepartement(Long id) {
        Departement departement = null;
        Optional<Departement> Odepartement = repository.findById(id);
        if(Odepartement == null)
        {
            return MessageResponse.builder().message("Departement Already Deleted").build();
        }else if(Odepartement.isPresent()){
            departement = Odepartement.get();
        }
        repository.delete(departement);
        return MessageResponse.builder().message("Departement Deleted").build();
    }

    @Override
    public List<Departement> findAllDepartement() {
        return repository.findAll();
    }

    @Override
    public Departement findById(Long id) {
        Departement departement = null;
        Optional<Departement> Odepartement = repository.findById(id);
        if(Odepartement.isPresent()){
            departement = Odepartement.get();
        }
        return departement;
    }
}
