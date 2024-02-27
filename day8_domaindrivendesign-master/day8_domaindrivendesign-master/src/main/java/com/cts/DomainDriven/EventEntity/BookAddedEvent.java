package com.cts.DomainDriven.EventEntity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.awt.print.Book;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookAddedEvent {
    private  Long bookId;
    private  String title;

  //  private Book book;

}
