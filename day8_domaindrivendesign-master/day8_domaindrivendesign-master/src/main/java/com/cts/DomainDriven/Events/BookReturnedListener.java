package com.cts.DomainDriven.Events;

import com.cts.DomainDriven.Entity.Book;
import com.cts.DomainDriven.EventEntity.BookReturnedEvent;
import com.cts.DomainDriven.Repo.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class BookReturnedListener {
    @Autowired
    private BookRepository bookRepository;

    @EventListener
    public void handleBookReturnedEvent(BookReturnedEvent event) {
        Optional<Book> optionalBook = bookRepository.findById(event.getBookId());
        optionalBook.ifPresent(book -> {
            book.setAvailable(true);
            bookRepository.save(book);
            System.out.println("Book returned event handled: " + book.getTitle());
        });
    }
}