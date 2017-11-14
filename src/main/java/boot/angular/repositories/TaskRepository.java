package boot.angular.repositories;

import boot.angular.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    Task findById(Integer id);
    Task findByTitle(String title);
}
