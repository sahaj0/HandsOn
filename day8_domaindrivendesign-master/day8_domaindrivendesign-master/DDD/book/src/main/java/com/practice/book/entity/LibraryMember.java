package com.practice.book.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;


@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class LibraryMember {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @OneToMany(mappedBy = "libraryMember", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<BookBorrowing> borrowings = new ArrayList<>();



    public void borrowBook(Book book,LibraryMember member) {
        if (book.getAvailableCopies() <= 0) {
            throw new IllegalStateException("No available copies of the book to borrow.");
        }

        System.out.println("From Library Mem "+member.name);

        //BookBorrowing borrowing = new BookBorrowing(this, book);
        BookBorrowing borrowing = new BookBorrowing(member,book);
        BookBorrowing borrowing1 = new BookBorrowing(book);
        borrowings.add(borrowing);

        book.borrow();
    }

    public void returnBook(Book book) {
        BookBorrowing borrowing = findBorrowingForBook(book);

        if (borrowing == null) {
            throw new IllegalStateException("Book not borrowed by this member.");
        }

        borrowings.remove(borrowing);
        book.returnBook();
    }

    private BookBorrowing findBorrowingForBook(Book book) {
        return borrowings.stream()
                .filter(b -> b.getBook().equals(book))
                .findFirst()
                .orElse(null);
    }
}