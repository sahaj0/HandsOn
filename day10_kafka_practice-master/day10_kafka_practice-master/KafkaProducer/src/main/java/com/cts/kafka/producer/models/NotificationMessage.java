package com.cts.kafka.producer.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.kafka.common.protocol.types.Field;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NotificationMessage {


    private Long id;
    private String message;
    private String recipient;
}
