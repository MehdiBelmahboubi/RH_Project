package com.mehdi.rh_project.Service;

import com.mehdi.rh_project.dao.Employes;
import com.mehdi.rh_project.request.AuthenticateRequest;
import com.mehdi.rh_project.request.RegisterRequest;
import com.mehdi.rh_project.response.AuthenticationResponse;
import com.mehdi.rh_project.response.MessageResponse;

import java.util.List;

public interface IEmployeService {
    public AuthenticationResponse createEmployes(RegisterRequest request);
    public AuthenticationResponse authenticate(AuthenticateRequest request);
    public MessageResponse deleteEmloyes(String cin);
    public MessageResponse updateEmployes(String cin,RegisterRequest request);
    public List<Employes> findAllEmployes();
    public Employes findByCin(String cin);
}
