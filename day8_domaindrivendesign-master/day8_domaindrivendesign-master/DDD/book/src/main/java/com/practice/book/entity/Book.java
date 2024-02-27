package com.practice.book.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Book")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String author;
    private int availableCopies;

    @OneToMany(mappedBy = "book", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<BookBorrowing> borrowings = new ArrayList<>();


    public Book(String title, String author, int availableCopies)
    {
        this.title=title;
        this.author = author;
        this.availableCopies=availableCopies;
    }

    public void borrow() {
        if (availableCopies <= 0) {
            throw new IllegalStateException("No available copies of the book.");
        }
        availableCopies--;
    }

    public void returnBook() {
        availableCopies++;
    }
}