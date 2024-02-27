package com.cts.DomainDriven.Service;

import com.cts.DomainDriven.Entity.Book;
import com.cts.DomainDriven.Entity.Borrowing;
import com.cts.DomainDriven.Entity.User;
import com.cts.DomainDriven.EventEntity.BookAddedEvent;
import com.cts.DomainDriven.EventEntity.BookBorrowedEvent;
import com.cts.DomainDriven.EventEntity.BookReturnedEvent;
import com.cts.DomainDriven.Repo.BookRepository;
import com.cts.DomainDriven.Repo.BorrowingRepository;
import com.cts.DomainDriven.Repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Optional;

@Service
public class LibraryService {
    private final ApplicationEventPublisher eventPublisher;
    private final BookRepository bookRepository;
    private final UserRepository userRepository;
    private final BorrowingRepository borrowingRepository;

   // ArrayList<User> userList=new ArrayList<>();

    @Autowired
    public LibraryService(ApplicationEventPublisher eventPublisher,
                          BookRepository bookRepository,
                          UserRepository userRepository,
                          BorrowingRepository borrowingRepository) {
        this.eventPublisher = eventPublisher;
        this.bookRepository = bookRepository;
        this.userRepository = userRepository;
        this.borrowingRepository = borrowingRepository;
    }

    public void addUser(User user) {
        if (user == null || user.getUsername() == null || user.getUsername().trim().isEmpty()) {
            throw new IllegalArgumentException("User information is incomplete");
        }
        userRepository.save(user);
    }

    public void addBook(Book book) {
        if (book == null || book.getTitle() == null || book.getTitle().trim().isEmpty()) {
            throw new IllegalArgumentException("Book information is incomplete");
        }

//        User user=new User();
//        userList.add(user.setUsername(););

        bookRepository.save(book);
        eventPublisher.publishEvent(new BookAddedEvent(book.getId(), book.getTitle()));
    }

    public void borrowBook(Long bookId, Long userId) {
        if (bookId == null || userId == null) {
            throw new IllegalArgumentException("Book ID or User ID cannot be null");
        }

        Optional<Book> optionalBook = bookRepository.findById(bookId);
        Optional<User> optionalUser = userRepository.findById(userId);

        if (!optionalBook.isPresent() || !optionalUser.isPresent()) {
            throw new IllegalArgumentException("Book or User not found");
        }

        Book book = optionalBook.get();
        if (!book.isAvailable()) {
            throw new IllegalStateException("Book is not available for borrowing");
        }

        // Create a Borrowing record
        Borrowing borrowing = new Borrowing();
        borrowing.setUser(optionalUser.get());
        borrowing.setBook(book);
        borrowing.setBorrowDate(LocalDateTime.now());

        borrowingRepository.save(borrowing);

        // Update book availability
        book.setAvailable(false);
        bookRepository.save(book);

        eventPublisher.publishEvent(new BookBorrowedEvent(bookId, userId));
    }

    public void returnBook(Long bookId, Long userId) {
        if (bookId == null || userId == null) {
            throw new IllegalArgumentException("Book ID or User ID cannot be null");
        }

        Optional<Book> optionalBook = bookRepository.findById(bookId);
        Optional<User> optionalUser = userRepository.findById(userId);

        if (!optionalBook.isPresent() || !optionalUser.isPresent()) {
            throw new IllegalArgumentException("Book or User not found");
        }

        Book book = optionalBook.get();
        if (book.isAvailable()) {
            throw new IllegalStateException("Book is already available, cannot be returned");
        }

        // Find the Borrowing record
        Optional<Borrowing> optionalBorrowing = borrowingRepository.findByBookIdAndUserIdAndReturnDateIsNull(bookId, userId);
        if (!optionalBorrowing.isPresent()) {
            throw new IllegalStateException("No active borrowing record found");
        }

        // Update Borrowing record with return date
        Borrowing borrowing = optionalBorrowing.get();
        borrowing.setReturnDate(LocalDateTime.now());
        borrowingRepository.save(borrowing);

        // Update book availability
        book.setAvailable(true);
        bookRepository.save(book);

        eventPublisher.publishEvent(new BookReturnedEvent(bookId, userId));
    }


}