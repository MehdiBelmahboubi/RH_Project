package com.mehdi.rh_project.Service;

import com.mehdi.rh_project.request.AuthenticateRequest;
import com.mehdi.rh_project.response.AuthenticationResponse;

public interface AuthenticateService {
    public AuthenticationResponse authenticate(AuthenticateRequest request) throws Exception;
}
