import React from "react";
import { Link } from "react-router-dom";
import BasicTable from "./BasicTable";

const Student = () => {
  return (
    <div>
      <div className="card-body">
        <div className="addStudentLink">
          <Link className="studentButton" to="/addStudent">
            Add Student
          </Link>
        </div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "50px",
            color: "Black",
            position: "relative",
            top: "-100px",
          }}
        >
          Student Details
        </h1>
        <BasicTable />
      </div>
    </div>
  );
};

export default Student;
