package com.practice.member.controller;

import com.practice.member.dto.LibraryMemberRequest;
import com.practice.member.service.LibraryMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/library/members")
public class LibraryMemberController {

    @Autowired
    private LibraryMemberService libraryMemberService;


    @PostMapping
    public ResponseEntity<String> createLibraryMember(@RequestBody LibraryMemberRequest request) {
        try {
            Long memberId = libraryMemberService.createLibraryMember(request.getName());
            return new ResponseEntity<>("Library member created with ID: " + memberId, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to create library member: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
