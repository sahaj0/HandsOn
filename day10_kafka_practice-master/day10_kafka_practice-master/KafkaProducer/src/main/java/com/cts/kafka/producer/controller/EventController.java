package com.cts.kafka.producer.controller;

import com.cts.kafka.producer.models.NotificationMessage;
import com.cts.kafka.producer.service.KafkaProducerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/notifications")
public class EventController {
    @Autowired
    private KafkaProducerService producerService;

    @PostMapping
    public ResponseEntity<?> sendNotification(@RequestBody NotificationMessage notification) {
        producerService.sendNotification(notification);
        return ResponseEntity.ok("Notification sent successfully");
    }
}
