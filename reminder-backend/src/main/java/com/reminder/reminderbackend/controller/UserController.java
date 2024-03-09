package com.reminder.reminderbackend.controller;

import com.reminder.reminderbackend.entity.User;
import com.reminder.reminderbackend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class UserController {
    private UserService userService;
    @PostMapping
    public ResponseEntity<String> createUserReminder(@RequestBody User user){
        String output=userService.createReminder(user);
        return new ResponseEntity<>(output, HttpStatus.CREATED);
    }
}
