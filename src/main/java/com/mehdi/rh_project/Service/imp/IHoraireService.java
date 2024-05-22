package com.mehdi.rh_project.Service.imp;

import com.mehdi.rh_project.Repository.HoraireRepostory;
import com.mehdi.rh_project.Repository.UserRepository;
import com.mehdi.rh_project.Service.HoraireService;
import com.mehdi.rh_project.dao.Horaire;
import com.mehdi.rh_project.dao.User;
import com.mehdi.rh_project.request.HoraireRequest;
import com.mehdi.rh_project.response.MessageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;
@Service
@RequiredArgsConstructor
public class IHoraireService implements HoraireService {
    private final HoraireRepostory horaireRepostory;
    private final UserRepository userRepository;
    @Override
    public MessageResponse create(HoraireRequest request) throws Exception {
        User employes = null;
        Optional<User> user = userRepository.findById(request.getEmployes());
        if(user.isPresent())
        {
            employes=user.get();
        }else {
            return MessageResponse.builder().message("Employee Not Found").build();
        }
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        String formattedDate = LocalDate.now().format(formatter);

        Optional<Horaire> existingHoraire = horaireRepostory.findByJourAndEmployes(formattedDate, employes);
        if (existingHoraire.isPresent()) {
            return MessageResponse.builder().message("Horaire already exists for this date").build();
        }

        var horaire = Horaire.builder()
                .jour(formattedDate)
                .heureTravaille(request.getHeureTravaille())
                .employes(employes)
                .build();
        horaireRepostory.save(horaire);
        return MessageResponse.builder().message("Horaire Saved").build();
    }

    @Override
    public MessageResponse delete(Long id) throws Exception {
        Horaire horaire=null;
        Optional<Horaire> OHoraire = horaireRepostory.findById(id);
        if(OHoraire.isEmpty())
        {
            return MessageResponse.builder().message("Horaire Not Found").build();
        }else {
            horaire=OHoraire.get();
        }
        horaireRepostory.delete(horaire);
        return MessageResponse.builder().message("Horaire Deleted").build();
    }

    @Override
    public List<Horaire> findByEmployee(String idEmp) throws Exception {
        User user = null;
        Optional<User> Ouser = userRepository.findById(idEmp);
        if(Ouser.isPresent()){
            user=Ouser.get();
        }
        return horaireRepostory.findByEmployes(user);
    }


}
