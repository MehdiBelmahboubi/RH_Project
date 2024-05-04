package com.mehdi.rh_project.Service;

import com.mehdi.rh_project.request.AuthenticateRequest;
import com.mehdi.rh_project.request.RegisterRequest;
import com.mehdi.rh_project.response.AuthenticationResponse;

public interface IAdminService {
    public AuthenticationResponse register(RegisterRequest request) throws Exception;
    public AuthenticationResponse authenticate(AuthenticateRequest request) throws Exception;

}
