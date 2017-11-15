package boot.angular.service;

import boot.angular.model.Book;
import boot.angular.repositories.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository bookRepository;

    @Override
    public Book findById(Integer id) {
        return bookRepository.findById(id);
    }

    @Override
    public Book findByTitle(String title) {
        return bookRepository.findByTitle(title);
    }

    @Override
    public List<Book> findAllBooks() {
        return bookRepository.findAll();
    }

    @Override
    public void deleteBookById(Integer id) {
        bookRepository.delete(id);
    }

    @Override
    public boolean isBookExist(Book book) {
        return findByTitle(book.getTitle()) != null;
    }

    @Override
    public void save(Book book) {
        bookRepository.save(book);
    }

    @Override
    public void updateBook(Book book) {
        save(book);
    }
}
