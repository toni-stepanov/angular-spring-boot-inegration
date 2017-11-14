package boot.angular.service;

import boot.angular.model.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

public interface TaskService {
	
	Task findById(Integer id);

	Task findByTitle(String title);

	List<Task> findAllTasks();
}