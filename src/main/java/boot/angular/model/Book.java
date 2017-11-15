package boot.angular.model;

import lombok.Data;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
public class Book implements Serializable{

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Integer id;

	@NotEmpty
	@Column(name="TITLE", nullable=false)
	private String title;

	@Column(name="AUTHOR", nullable=false)
	private String author;

}
