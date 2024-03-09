package com.reminder.reminderbackend.service.impl;

import com.reminder.reminderbackend.entity.User;
import com.reminder.reminderbackend.repository.UserRepository;
import com.reminder.reminderbackend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    @Override
    public String createReminder(User user) {
        userRepository.save(user);

        return "reminder created successfully";
    }
}
