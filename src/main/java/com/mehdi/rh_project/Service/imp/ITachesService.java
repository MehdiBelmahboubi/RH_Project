package com.mehdi.rh_project.Service.imp;

import com.mehdi.rh_project.Repository.TachesRepostory;
import com.mehdi.rh_project.Repository.UserRepository;
import com.mehdi.rh_project.Service.TachesService;
import com.mehdi.rh_project.dao.Taches;
import com.mehdi.rh_project.dao.User;
import com.mehdi.rh_project.enums.Taches_Etat;
import com.mehdi.rh_project.request.TachesRequest;
import com.mehdi.rh_project.response.MessageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ITachesService implements TachesService {
    private final TachesRepostory tachesRepostory;
    private final UserRepository userRepository;
    @Override
    public MessageResponse createTache(TachesRequest request) throws Exception {
        User employes = null;
        Optional<User> user = userRepository.findById(request.getEmployes());
        if(user.isPresent())
        {
            employes=user.get();
        }else {
            return MessageResponse.builder().message("Employee Not Found").build();
        }
        var taches = Taches.builder()
                .dateDebut(request.getDateDebut())
                .dateFin(request.getDateFin())
                .description(request.getDescription())
                .etat(Taches_Etat.Encours)
                .employes(employes)
                .build();
        tachesRepostory.save(taches);
        return MessageResponse.builder().message("Taches Created").build();
    }

    @Override
    public MessageResponse deleteTache(Long id) throws Exception {
        Taches tachedelete = null;
        Optional<Taches> taches = tachesRepostory.findById(id);
        if(taches.isEmpty())
        {
            return MessageResponse.builder().message("Taches Not Found").build();
        }else {
            tachedelete=taches.get();
        }
        tachesRepostory.delete(tachedelete);
        return MessageResponse.builder().message("Taches Deleted").build();
    }

    @Override
    public MessageResponse tacheTerminer(Long id) throws Exception {
        Taches tacheTerminer = null;
        Optional<Taches> taches = tachesRepostory.findById(id);
        if(taches.isEmpty())
        {
            return MessageResponse.builder().message("Taches Not Found").build();
        }else {
            tacheTerminer=taches.get();
        }
        tacheTerminer.setEtat(Taches_Etat.Terminer);
        tachesRepostory.save(tacheTerminer);
        return MessageResponse.builder().message("Taches Terminer").build();
    }

    @Override
    public MessageResponse tacheEnRetard(Long id) throws Exception {
        Taches tacheEnRetard = null;
        Optional<Taches> taches = tachesRepostory.findById(id);
        if(taches.isEmpty())
        {
            return MessageResponse.builder().message("Taches Not Found").build();
        }else {
            tacheEnRetard=taches.get();
        }
        tacheEnRetard.setEtat(Taches_Etat.EnRetard);
        tachesRepostory.save(tacheEnRetard);
        return MessageResponse.builder().message("Taches En Retard").build();
    }

    @Override
    public List<Taches> findByEmployee(String idEmpl) throws Exception {
        User user = null;
        Optional<User> Ouser = userRepository.findById(idEmpl);
        if(Ouser.isPresent()){
            user=Ouser.get();
        }
        return tachesRepostory.findByEmployes(user);
    }

}
