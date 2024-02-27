package com.practice.member.service;

import org.springframework.stereotype.Service;

@Service
public interface LibraryMemberService {

    public Long createLibraryMember(String name);
}
