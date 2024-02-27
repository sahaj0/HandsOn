package com.practice.book.service;


import com.practice.book.entity.Book;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface LibraryService {

    public void returnBook(Long memberId, Long bookId);
    public void borrowBook(Long memberId, Long bookId);
    public Book addBook(String title, String author, int availableCopies);
    public void topUpBooks(List<Long> bookIds, int quantity);
}
