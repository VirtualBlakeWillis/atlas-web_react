import React from 'react';
import PropTypes from 'prop-types';

const propDefaults = {
  isHeader: false,
  textSecondCell: null,
};

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  /* if isHeader == true AND textSecondCell == null */
  if (isHeader) {
    if (textSecondCell == null) {
      return (
        <tr>
          <th colSpan="2">{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      );
    }
  }
  return (
    <tr>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  );
};

CourseListRow.defaultProps = propDefaults;
CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([null]),
    PropTypes.number,
  ]),
};

export default CourseListRow;
