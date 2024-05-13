package com.mehdi.rh_project.Service.imp;


import com.mehdi.rh_project.Repository.UserRepository;
import com.mehdi.rh_project.Service.AuthenticateService;
import com.mehdi.rh_project.request.AuthenticateRequest;
import com.mehdi.rh_project.response.AuthenticationResponse;
import com.mehdi.rh_project.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class IAuthenticateService implements AuthenticateService {
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    @Override
    public AuthenticationResponse authenticate(AuthenticateRequest request) throws AuthenticationException {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Invalid email/password");
        }
        var User = userRepository.findByEmail(request.getEmail());

        if(User != null) {
            var jwtToken = jwtService.generateToken(User);
            return AuthenticationResponse.builder()
                    .token(jwtToken)
                    .message("User authenticated")
                    .build();
        }
        else {
            throw new UsernameNotFoundException("User not found");
        }
    }

}
