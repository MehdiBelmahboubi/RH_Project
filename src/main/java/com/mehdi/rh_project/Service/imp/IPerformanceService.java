package com.mehdi.rh_project.Service.imp;

import com.mehdi.rh_project.Repository.PerformanceRepostory;
import com.mehdi.rh_project.Repository.UserRepository;
import com.mehdi.rh_project.Service.PerformanceService;
import com.mehdi.rh_project.dao.Performance;
import com.mehdi.rh_project.dao.User;
import com.mehdi.rh_project.request.PerformanceRequest;
import com.mehdi.rh_project.response.MessageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class IPerformanceService implements PerformanceService {
    private final PerformanceRepostory performanceRepostory;
    private final UserRepository userRepository;
    @Override
    public MessageResponse createPerformance(PerformanceRequest request) throws Exception {
        User employes = null;
        Optional<User> user = userRepository.findById(request.getEmployes());
        if(user.isPresent())
        {
            employes=user.get();
        }else {
            return MessageResponse.builder().message("Employee Not Found").build();
        }

        var performance = Performance.builder()
                .description(request.getDescription())
                .score(request.getScore())
                .dateReview(request.getDateReview())
                .employes(employes)
                .build();
        performanceRepostory.save(performance);
        return MessageResponse.builder().message("Performance Created").build();
    }

    @Override
    public MessageResponse deletePerformance(Long id) throws Exception {
        Performance performance = null;
        Optional<Performance> Operformance = performanceRepostory.findById(id);

        if(Operformance.isEmpty()){
            return MessageResponse.builder().message("Performance Not Found").build();
        }else {
            performance=Operformance.get();
        }
        performanceRepostory.delete(performance);
        return MessageResponse.builder().message("Performance Deleted").build();
    }

    @Override
    public List<Performance> findByIdEmp(String idEmp) throws Exception {
        User user = null;
        Optional<User> Ouser = userRepository.findById(idEmp);
        if(Ouser.isPresent()){
            user=Ouser.get();
        }
        return performanceRepostory.findByEmployes(user);
    }
}
