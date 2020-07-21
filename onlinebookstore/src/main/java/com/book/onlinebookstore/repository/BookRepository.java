/**
 * 
 */
package com.book.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.book.onlinebookstore.entity.Book;

/**
 * @author Harvindar Singh 
 *
 */
public interface BookRepository extends JpaRepository<Book,Long>{

}
