package com.practice.book.repository;

import com.practice.book.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {


    //find books by author
    List<Book> findByAuthor(String author);

}
