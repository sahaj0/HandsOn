package com.cts.DomainDriven.Repo;

import com.cts.DomainDriven.Entity.Borrowing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BorrowingRepository extends JpaRepository<Borrowing,Long> {
    Optional<Borrowing> findByBookIdAndUserIdAndReturnDateIsNull(Long bookId, Long userId);
}
