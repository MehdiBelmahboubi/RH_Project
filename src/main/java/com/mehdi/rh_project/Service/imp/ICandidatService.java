package com.mehdi.rh_project.Service.imp;

import com.mehdi.rh_project.Repository.CandidatRepository;
import com.mehdi.rh_project.Repository.DepartementRepository;
import com.mehdi.rh_project.Service.CandidatService;
import com.mehdi.rh_project.dao.Candidat;
import com.mehdi.rh_project.dao.Departement;
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
        Path path = Paths.get(System.getProperty("user.home"),"cadidates-app-files","candidatures");
        if(!Files.exists(path))
        {
            Files.createDirectories(path);
        }
        String cvId = UUID.randomUUID().toString();
        Path filePath1 = Paths.get(System.getProperty("user.home"),"cadidates-app-files","candidatures",cvId+".pdf");
        Files.copy(cv.getInputStream(),filePath1);
        String lettreId = UUID.randomUUID().toString();
        Path filePath2 = Paths.get(System.getProperty("user.home"),"cadidates-app-files","candidatures",lettreId+".pdf");
        Files.copy(lettreMotivation.getInputStream(),filePath2);


        var candidatcreate = Candidat.builder()
                .nom(nom)
                .prenom(prenom)
                .email(email)
                .cv(filePath1.toUri().toString())
                .lettreMotivation(filePath2.toUri().toString())
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

    @Override
    public byte[] getcvFile(long idCandidat) throws Exception {
        Candidat candidat = repository.findById(idCandidat).get();
        String filePath = candidat.getCv();
        return Files.readAllBytes(Path.of(URI.create(filePath)));
    }

    @Override
    public byte[] getlettreFile(long idCandidat) throws Exception {
        Candidat candidat = repository.findById(idCandidat).get();
        String filePath = candidat.getLettreMotivation();
        return Files.readAllBytes(Path.of(URI.create(filePath)));
    }
}
