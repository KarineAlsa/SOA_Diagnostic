CREATE TABLE IF NOT EXISTS Students (
    id INT NOT NULL AUTO_INCREMENT,
    registration_number VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    tutor INT,
    PRIMARY KEY (id),
    UNIQUE INDEX email_UNIQUE (email ASC) VISIBLE,
    UNIQUE INDEX registration_number_UNIQUE (registration_number ASC) VISIBLE,
    CONSTRAINT fk_idTutor FOREIGN KEY (tutor) REFERENCES Tutors (id) ON DELETE CASCADE ON UPDATE CASCADE);