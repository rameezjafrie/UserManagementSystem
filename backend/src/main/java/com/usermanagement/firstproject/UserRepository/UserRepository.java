package com.usermanagement.firstproject.UserRepository;



import org.springframework.data.jpa.repository.JpaRepository;
import com.usermanagement.firstproject.Entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
}

