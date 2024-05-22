package com.mehdi.rh_project;

//import com.mehdi.rh_project.Service.imp.AdminService;
//import com.mehdi.rh_project.dao.Admin;
//import com.mehdi.rh_project.enums.Role;
//import com.mehdi.rh_project.request.RegisterRequest;
//import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class RhProjectApplication {

//	private  PasswordEncoder passwordEncoder;


	public static void main(String[] args) {
		SpringApplication.run(RhProjectApplication.class, args);
	}

//	@Bean
//	public CommandLineRunner commandLineRunner(
//			AdminService service
//	) {
//		return args -> {
//			var admin = RegisterRequest.builder()
//					.cin("ay11")
//					.nom("Admin")
//					.prenom("Admin")
//					.photo("photo")
//					.telephone(Long.valueOf("0651"))
//					.email("email")
//					.password("test")
//					.role(Role.ADMIN)
//					.build();
//			System.out.println("Admin token: " + service.register(admin).getToken());
//		};
//	}

}
