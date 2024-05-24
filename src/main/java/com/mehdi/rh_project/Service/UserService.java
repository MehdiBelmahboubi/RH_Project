package com.mehdi.rh_project.Service;

import com.mehdi.rh_project.dao.User;
import com.mehdi.rh_project.enums.Contrat_Type;
import com.mehdi.rh_project.enums.Fonction_Type;
import com.mehdi.rh_project.enums.Role;
import com.mehdi.rh_project.request.UserRequest;
import com.mehdi.rh_project.response.AuthenticationResponse;
import com.mehdi.rh_project.response.MessageResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface UserService {
    public AuthenticationResponse createUser(MultipartFile photo , String cin,String cnss, Contrat_Type contrat, String dateNsc,
                                             String dateRecrutement, String departement, String email, Fonction_Type fonction,
                                             String nom, String password, String prenom,
                                             float salaire, String telephone, Role role) throws Exception;
    public MessageResponse deleteUser(String cin) throws Exception;
    public MessageResponse updateUser(MultipartFile photo , String cin,String cnss, Contrat_Type contrat, String dateNsc,
                                      String dateRecrutement, String departement, String email, Fonction_Type fonction,
                                      String nom, String password, String prenom,
                                      float salaire, String telephone, Role role) throws Exception;
    public List<User> findAllUser() throws Exception;

    public List<User> findAllRh() throws Exception;
    public List<User> findByDepartement(String NomDepartement) throws Exception;
    public List<User> findByRh(String cin) throws Exception;
}
