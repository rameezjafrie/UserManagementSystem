package com.usermanagement.firstproject.service;



import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import com.usermanagement.firstproject.Entity.User;
import com.usermanagement.firstproject.UserRepository.UserRepository;
import org.springframework.stereotype.Service;


@Service

public class UserService {

    @Autowired
    private UserRepository repo;

    public List<User> getAllUsers() {
        return repo.findAll();
    }

    public User saveUser(User user) {
        return repo.save(user);
    }

    public void deleteUser(Long id) {
        repo.deleteById(id);
    }
}