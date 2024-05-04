package com.mehdi.rh_project.Service;

import com.mehdi.rh_project.dao.Employes;
import com.mehdi.rh_project.dao.RH;
import com.mehdi.rh_project.request.AuthenticateRequest;
import com.mehdi.rh_project.request.RegisterRequest;
import com.mehdi.rh_project.response.AuthenticationResponse;
import com.mehdi.rh_project.response.MessageResponse;

import java.util.List;

public interface IRhService {
    public AuthenticationResponse create(RegisterRequest request) throws Exception;
    public AuthenticationResponse authenticate(AuthenticateRequest request) throws Exception;
    public MessageResponse deleteRh(String cin) throws Exception;
    public MessageResponse updateRh(String cin,RegisterRequest request) throws Exception;
    public List<RH> findAllRh() throws Exception;
    public RH findByCin(String cin) throws Exception;
}
