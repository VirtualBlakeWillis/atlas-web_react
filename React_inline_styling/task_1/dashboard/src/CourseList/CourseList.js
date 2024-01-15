import React from "react";
import PropTypes from "prop-types";
import CourseListRow from "../CourseListRow/CourseListRow";
import "./CourseList.css";
import CourseShape from "./CourseShape";

import { StyleSheet, css } from "aphrodite";

const CourseList = ({listCourses}) => {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
      </thead>
      <tbody>
        {listCourses.length === 0 ?
        <CourseListRow isHeader={false} textFirstCell="No course available yet" />
        : listCourses.map((course) => {
          return <CourseListRow key={course.id} isHeader={false} textFirstCell={course.name} textSecondCell={course.credit} />
        })}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
  listCourses: []
};

const styles = StyleSheet.create({
  CourseList: {
    width: "100%",
    border: "1px solid lightgray"
  }
});

export default CourseList;
