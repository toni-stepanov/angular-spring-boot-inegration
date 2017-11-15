package boot.angular.repositories;

import boot.angular.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    Book findById(Integer id);
    Book findByTitle(String title);
    Book findByAuthor(String author);
}
