package com.cts.DomainDriven.Repo;

import com.cts.DomainDriven.Entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface BookRepository extends JpaRepository<Book,Long> {
}
