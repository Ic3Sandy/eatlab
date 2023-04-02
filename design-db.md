# Table: Students

## SQL Schema for Tracking Student Enrollment in Courses at a University

To track student enrollment in courses at a university, we need to design a SQL schema that can efficiently store and manage data related to students, courses, and their enrollment information. Here's a possible schema design:

### Students Table

The students table will contain information about each student, including a unique ID, name, email address, and graduation year.

```sql
CREATE TABLE students (
  id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  graduation_year INT NOT NULL
);
```

### Courses Table

The courses table will contain information about each course, including a unique ID, name, and description.

```sql
CREATE TABLE courses (
  id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(255) NOT NULL
);
```

### Enrollments Table

The enrollments table will track the enrollment of each student in each course. It will contain a foreign key to the student ID, a foreign key to the course ID, and the date the student was enrolled in the course.

```sql
CREATE TABLE enrollments (
  student_id INT NOT NULL,
  course_id INT NOT NULL,
  enrollment_date DATE NOT NULL,
  PRIMARY KEY (student_id, course_id),
  FOREIGN KEY (student_id) REFERENCES students(id),
  FOREIGN KEY (course_id) REFERENCES courses(id)
);
```
