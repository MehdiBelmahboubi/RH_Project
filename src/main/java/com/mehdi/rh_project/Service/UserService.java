package com.mehdi.rh_project.Service;

import com.mehdi.rh_project.dao.User;
import com.mehdi.rh_project.request.UserRequest;
import com.mehdi.rh_project.response.AuthenticationResponse;
import com.mehdi.rh_project.response.MessageResponse;

import java.util.List;

public interface UserService {
    public AuthenticationResponse createUser(UserRequest request) throws Exception;
    public MessageResponse deleteUser(String cin) throws Exception;
    public MessageResponse updateUser(String cin, UserRequest request) throws Exception;
    public List<User> findAllUser() throws Exception;
    public List<User> findByDepartement(String NomDepartement) throws Exception;
}
