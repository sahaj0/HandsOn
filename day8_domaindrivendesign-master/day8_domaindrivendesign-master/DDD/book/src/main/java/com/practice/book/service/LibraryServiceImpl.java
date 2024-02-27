package com.practice.book.service;


import com.practice.book.entity.Book;
import com.practice.book.entity.LibraryMember;
import com.practice.book.repository.BookRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class LibraryServiceImpl implements LibraryService {
    private final BookRepository bookRepository;

    private final RestTemplate restTemplate;

    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    public LibraryServiceImpl(BookRepository bookRepository, RestTemplate restTemplate) {
        this.bookRepository = bookRepository;
        this.restTemplate = restTemplate;
    }

    @Override
    public Book addBook(String title, String author, int availableCopies) {
        Book book = new Book(title, author, availableCopies);
        return bookRepository.save(book);
    }

    @Override
    public void topUpBooks(List<Long> bookIds, int quantity) {
        entityManager.createQuery("UPDATE Book b SET b.availableCopies = b.availableCopies + :quantity " +
                        "WHERE b.id IN :bookIds")
                .setParameter("quantity", quantity)
                .setParameter("bookIds", bookIds)
                .executeUpdate();
    }

    @Transactional
    public void borrowBook(Long memberId, Long bookId) {

        LibraryMember member = restTemplate.getForObject("memberId", LibraryMember.class, memberId);

        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new IllegalArgumentException("Book not found"));

        //member.borrowBook(book);

        member.borrowBook(book,member);

        // The changes to the entities will be automatically saved when the transaction is committed.
        // No need to explicitly call save on the repositories.
    }


    @Transactional
    public void returnBook(Long memberId, Long bookId) {
        LibraryMember member = restTemplate.getForObject("memberId", LibraryMember.class, memberId);

        Book book = bookRepository.findById(bookId)
                .orElseThrow(() -> new IllegalArgumentException("Book not found"));

        member.returnBook(book);

        HttpHeaders headers = new HttpHeaders();
        HttpEntity<LibraryMember> req = new HttpEntity<>(member, headers);
        bookRepository.save(book);
    }


}
