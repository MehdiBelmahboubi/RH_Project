package com.mehdi.rh_project.Service.imp;

import com.mehdi.rh_project.Repository.CongeRepostory;
import com.mehdi.rh_project.Repository.UserRepository;
import com.mehdi.rh_project.Service.CongeService;
import com.mehdi.rh_project.dao.Conges;
import com.mehdi.rh_project.dao.User;
import com.mehdi.rh_project.enums.Conges_Etat;
import com.mehdi.rh_project.request.CongeRequest;
import com.mehdi.rh_project.response.MessageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ICongeService implements CongeService {
    private final CongeRepostory congeRepostory;
    private final UserRepository userRepository;
    @Override
    public MessageResponse createConge(CongeRequest request) throws Exception {
        User employes = null;
        Optional<User> user = userRepository.findById(request.getEmployes());
        if(user.isPresent())
        {
            employes=user.get();
        }else {
            return MessageResponse.builder().message("Employee Not Found").build();
        }
        var congeCreated = Conges.builder()
                .dateDemande(LocalDate.now().toString())
                .dateDebut(request.getDateDebut())
                .dateFin(request.getDateFin())
                .periode(request.getPeriode())
                .type(request.getType())
                .etat(Conges_Etat.EnCours)
                .employes(employes)
                .build();
        congeRepostory.save(congeCreated);
        return MessageResponse.builder().message("Conge Created").build();
    }

    @Override
    public MessageResponse deleteConge(Long id) throws Exception {
        Conges conges = null;
        Optional<Conges> OConges = congeRepostory.findById(id);
        if(OConges.isPresent())
        {
            conges = OConges.get();
        }else{
            return MessageResponse.builder().message("Conge Not Found").build();
        }
        congeRepostory.delete(conges);
        return MessageResponse.builder().message("Conge Deleted").build();
    }

    @Override
    public MessageResponse acceptConge(Long id) throws Exception {
        Conges conges = null;
        Optional<Conges> OConges = congeRepostory.findById(id);
        if(OConges.isPresent())
        {
            conges = OConges.get();
        }else{
            return MessageResponse.builder().message("Conge Not Found").build();
        }
        conges.setEtat(Conges_Etat.Accepter);
        congeRepostory.save(conges);
        return MessageResponse.builder().message("Conge Accepted").build();
    }

    @Override
    public MessageResponse declineConge(Long id) throws Exception {
        Conges conges = null;
        Optional<Conges> OConges = congeRepostory.findById(id);
        if(OConges.isPresent())
        {
            conges = OConges.get();
        }else{
            return MessageResponse.builder().message("Conge Not Found").build();
        }
        conges.setEtat(Conges_Etat.Refuser);
        congeRepostory.save(conges);
        return MessageResponse.builder().message("Conge Declined").build();
    }

    @Override
    public List<Conges> findByEmployee(String idEmpl) throws Exception {
        User user = null;
        Optional<User> Ouser = userRepository.findById(idEmpl);
        if(Ouser.isPresent()){
            user=Ouser.get();
        }
        return congeRepostory.findByEmployes(user);
    }
}
