package com.reminder.reminderbackend.repository;

import com.reminder.reminderbackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
