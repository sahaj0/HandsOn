package com.cts.DomainDriven.EventEntity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookBorrowedEvent {
    private  Long bookId;
    private  Long userId;

  //  private Book book;

}
