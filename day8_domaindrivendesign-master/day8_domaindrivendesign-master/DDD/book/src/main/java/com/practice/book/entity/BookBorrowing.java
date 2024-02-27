package com.practice.book.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "BookBorrowing")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class BookBorrowing {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "library_member_id")
    private LibraryMember libraryMember;

    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;

    public BookBorrowing(LibraryMember member, Book book) {
        this.book = book;
        this.libraryMember = member;
    }


    public BookBorrowing(Book book) {
        //this.libraryMember = libraryMember;
        this.book = book;
    }
}
