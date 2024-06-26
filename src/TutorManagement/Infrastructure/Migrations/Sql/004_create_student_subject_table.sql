CREATE TABLE IF NOT EXISTS StudentSubject (
    id INT NOT NULL AUTO_INCREMENT,
    idStudent INT NOT NULL,
    idSubject INT NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY id_UNIQUE (id),
    KEY id_idx (idStudent),
    CONSTRAINT fk_idStudent FOREIGN KEY (idStudent) REFERENCES Students (id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT fk_idSubject FOREIGN KEY (idSubject) REFERENCES Subjects (id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT unique_student_subject UNIQUE (idStudent, idSubject)
);