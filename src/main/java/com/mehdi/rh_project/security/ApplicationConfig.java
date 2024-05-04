package com.mehdi.rh_project.security;

import com.mehdi.rh_project.Repository.AdminRepository;
import com.mehdi.rh_project.Repository.EmployeRepository;
import com.mehdi.rh_project.Repository.RhRepository;
import com.mehdi.rh_project.dao.Admin;
import com.mehdi.rh_project.dao.Employes;
import com.mehdi.rh_project.dao.RH;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import java.util.Arrays;
import java.util.Collections;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {
    private final RhRepository rhRepository;
    private final AdminRepository adminRepository;
    private final EmployeRepository employeeRepository;

    @Bean
    public UserDetailsService userDetailsService(){
        return username -> {
            RH rhUser = rhRepository.findByEmail(username);
            if (rhUser != null) {
                return rhUser;
            }

            Admin adminUser = adminRepository.findByEmail(username);
            if (adminUser != null) {
                return adminUser;
            }

            Employes employeeUser = employeeRepository.findByEmail(username);
            if (employeeUser != null) {
                return employeeUser;
            }

            throw new UsernameNotFoundException("User not found");
        };
    }

    @Bean
    public AuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService());
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception{
        return config.getAuthenticationManager();
    }



    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
