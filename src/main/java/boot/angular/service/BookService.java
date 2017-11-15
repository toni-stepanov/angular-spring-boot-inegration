package boot.angular.service;

import boot.angular.model.Book;

import java.util.List;

public interface BookService {
	
	Book findById(Integer id);

	Book findByTitle(String title);

	List<Book> findAllBooks();
}