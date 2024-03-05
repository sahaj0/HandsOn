package com.cts.kafka.consumer.service;

import com.cts.kafka.consumer.models.NotificationMessage;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumerService {


    @KafkaListener(topics = "notification-topic", groupId = "notification-consumer-group")
    public void receiveNotification(NotificationMessage notification) {
        System.out.println("Received Notification: " + notification);

    }

//    @KafkaListener(topics = "notification-topic", groupId = "notification-consumer-group")
//    public void receiveNotification(String rawMessage) {
//
//        System.out.println("Received Raw Message: " + rawMessage);
//    }
//
}
