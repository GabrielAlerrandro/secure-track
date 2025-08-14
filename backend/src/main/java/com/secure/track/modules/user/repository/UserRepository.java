package com.secure.track.modules.user.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.secure.track.modules.user.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, UUID> {
    Optional<User> findyById(UUID id);
}
