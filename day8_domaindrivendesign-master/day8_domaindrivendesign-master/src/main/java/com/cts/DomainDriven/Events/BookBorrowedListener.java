package com.cts.DomainDriven.Events;

import com.cts.DomainDriven.Entity.Book;
import com.cts.DomainDriven.EventEntity.BookBorrowedEvent;
import com.cts.DomainDriven.Repo.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class BookBorrowedListener {
    @Autowired
    private BookRepository bookRepository;

    @EventListener
    public void handleBookBorrowedEvent(BookBorrowedEvent event) {
        Optional<Book> optionalBook = bookRepository.findById(event.getBookId());
        optionalBook.ifPresent(book -> {
            book.setAvailable(false);
            bookRepository.save(book);
            System.out.println("Book borrowed event handled: " + book.getTitle());
        });
    }
}