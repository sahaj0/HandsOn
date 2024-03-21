package com.example.blog.controller;

import com.example.blog.model.Blog;
import com.example.blog.repo.BlogRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/blog")
public class BlogController {

    private final BlogRepo blogRepo;

    @Autowired
    public BlogController(BlogRepo blogRepo) {
        this.blogRepo = blogRepo;
    }

    @PostMapping("/save")
    public Blog save(@RequestBody Blog blog){
        return blogRepo.save(blog);
    }

    @GetMapping("/{id}")
    public Blog get(@PathVariable int id){
        return blogRepo.findById(id).get();
    }


    @GetMapping("/all")
    public List<Blog> getAll(){
        return blogRepo.findAll();
    }
}
