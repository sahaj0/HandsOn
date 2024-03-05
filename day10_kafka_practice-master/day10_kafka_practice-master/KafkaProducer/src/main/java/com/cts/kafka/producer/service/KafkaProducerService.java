package com.cts.kafka.producer.service;

import com.cts.kafka.producer.models.NotificationMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class KafkaProducerService {
    private static final String TOPIC = "notification-topic";

    @Autowired
    private KafkaTemplate<String, NotificationMessage> kafkaTemplate;

    public void sendNotification(NotificationMessage notification) {
        kafkaTemplate.send(TOPIC, notification);
    }
}
