import React from "react";
import PropTypes from "prop-types";
import CourseListRow from "../CourseList/CourseListRow";
import CourseShape from "./CourseShape";

import { StyleSheet, css } from "aphrodite";

const CourseList = ({listCourses}) => {
  return (
    <table className={css(styles.CourseList)} id="CourseList">
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
    border: "1px solid #ddd",
    margin: "30px 50px",
    width: "calc(100% - 100px)",
  }
});

export default CourseList;
