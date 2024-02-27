package com.practice.book.controller;

import com.practice.book.entity.Book;
import com.practice.book.service.LibraryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/library")
public class LibraryController {
    @Autowired
    private LibraryService libraryService;

    @PostMapping("/addBook")
    public ResponseEntity<Book> addBook(@RequestBody Book bookRequest) {
        Book book = libraryService.addBook(bookRequest.getTitle(), bookRequest.getAuthor(),bookRequest.getAvailableCopies());
        return new ResponseEntity<>(book, HttpStatus.CREATED);
    }

    @PostMapping("/topUpBooks")
    public ResponseEntity<String> topUpBooks(@RequestParam List<Long> bookIds, @RequestParam int quantity) {
        try {
            libraryService.topUpBooks(bookIds, quantity);
            return new ResponseEntity<>("Books topped up successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to top up books: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/borrowBook")
    public ResponseEntity<String> borrowBook(@RequestParam Long memberId, @RequestParam Long bookId) {
        try {
            libraryService.borrowBook(memberId, bookId);
            return new ResponseEntity<>("Book borrowed successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to borrow book: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/returnBook")
    public ResponseEntity<String> returnBook(@RequestParam Long memberId, @RequestParam Long bookId) {
        try {
            libraryService.returnBook(memberId, bookId);
            return new ResponseEntity<>("Book returned successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to return book: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}