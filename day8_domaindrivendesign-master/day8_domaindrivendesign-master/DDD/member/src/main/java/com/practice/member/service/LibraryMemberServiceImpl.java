package com.practice.member.service;

import com.practice.member.entity.LibraryMember;
import com.practice.member.repository.LibraryMemberRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LibraryMemberServiceImpl implements LibraryMemberService{

    @Autowired
    private LibraryMemberRepository libraryMemberRepository;



    @Override
    @Transactional
    public Long createLibraryMember(String name) {
        LibraryMember newMember = new LibraryMember();
        newMember.setName(name);

        LibraryMember savedMember = libraryMemberRepository.save(newMember);

        return savedMember.getId();
    }
}
