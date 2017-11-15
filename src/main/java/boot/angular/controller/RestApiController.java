package boot.angular.controller;

import boot.angular.model.Book;
import boot.angular.service.BookService;
import boot.angular.util.CustomErrorType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class RestApiController {

    public static final Logger logger = LoggerFactory.getLogger(RestApiController.class);

    @Autowired
    BookService bookService;

    @RequestMapping("books")
    public ResponseEntity<List<Book>> getAllBooks() {
        List<Book> books = bookService.findAllBooks();
        if (books.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(books, HttpStatus.OK);
    }

    @RequestMapping(value = "books/{id}")
    public ResponseEntity<Book> getBook(@PathVariable("id") Integer bookId) {
        Book book = bookService.findById(bookId);
        if (book == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(book, HttpStatus.OK);
    }

    @RequestMapping(value = "book/delete/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteBook(@PathVariable("id") int id) {
        logger.info("Fetching & Deleting Book with id {}", id);

        Book book = bookService.findById(id);
        if (book == null) {
            logger.error("Unable to delete. Book with id {} not found.", id);
            return new ResponseEntity(new CustomErrorType("Unable to delete. Book with id " + id + " not found."),
                    HttpStatus.NOT_FOUND);
        }
        bookService.deleteBookById(id);
        return new ResponseEntity<Book>(HttpStatus.NO_CONTENT);
    }

    @RequestMapping(value = "/book/create", method = RequestMethod.POST)
    public ResponseEntity<?> createBook(@RequestBody Book book){
        logger.info("Creating Book : {}", book);

        if (bookService.isBookExist(book)) {
            logger.error("Unable to create. A Book with title {} already exist", book.getTitle());
            return new ResponseEntity(new CustomErrorType("Unable to create. A Book with name " +
                    book.getTitle() + " already exist."),HttpStatus.CONFLICT);
        }
        bookService.save(book);
        return new ResponseEntity<String>(HttpStatus.CREATED);
    }

    @RequestMapping(value = "/book/update/{id}", method = RequestMethod.PUT)
    public ResponseEntity<?> updateBook(@PathVariable("id") Integer id, @RequestBody Book book) {
        logger.info("Updating Book with id {}", id);

        Book currentBook = bookService.findById(id);

        if (currentBook == null) {
            logger.error("Unable to update. Book with id {} not found.", id);
            return new ResponseEntity(new CustomErrorType("Unable to upate. Book with id " + id + " not found."),
                    HttpStatus.NOT_FOUND);
        }

        currentBook.setTitle(book.getTitle());
        currentBook.setAuthor(book.getAuthor());

        bookService.updateBook(currentBook);
        return new ResponseEntity<>(currentBook, HttpStatus.OK);
    }


}