create database kimado;
use kimado;
create table students(
student_name varchar(20),
student_rank varchar(20),
date_joined varchar(8),
num_classes int(100),
student_age int (10),
phone varchar(12),
email varchar(20),
student_active boolean default true,
last_present varchar(8)
);





