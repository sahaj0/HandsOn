package com.cts.DomainDriven.Repo;

import com.cts.DomainDriven.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.awt.print.Book;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
}
