import React from 'react';
import PropTypes from 'prop-types';



const propDefaults = {
  isHeader: false,
  textSecondCell: null,
};

const styleIsHeader = {
  backgroundColor: '#deb5b545',
}
const styleIsNotHeader = {
  backgroundColor: '#f5f5f5ab',
}

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  /* if isHeader == true AND textSecondCell == null */
  if (isHeader) {
    if (textSecondCell == null) {
      return (
        <tr style={styleIsHeader}>
          <th colSpan="2">{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr style={styleIsHeader}>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      );
    }
  }
  return (
    <tr style={styleIsNotHeader}>
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
