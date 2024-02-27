package com.cts.DomainDriven.EventEntity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookReturnedEvent {
    private  Long bookId;
    private  Long userId;

  //  private Book book;

}
