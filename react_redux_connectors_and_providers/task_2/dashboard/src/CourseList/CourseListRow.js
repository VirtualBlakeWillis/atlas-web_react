import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, css } from 'aphrodite';

import { useEffect, useState } from 'react';



const propDefaults = {
  isHeader: false,
  textSecondCell: null,
};

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {

  const [isChecked, setIsChecked] = useState(false);
  /* if isHeader == true AND textSecondCell == null */
useEffect(() => {
  if (isChecked) {
    setIsChecked(true);
  } else {
    setIsChecked(false);
  }
}, [isChecked]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }


  if (isHeader) {
    if (textSecondCell == null) {
      return (
        <tr className={css(styles.header)}>
          <th colSpan="2">{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr className={css(styles.header)}>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      );
    }
  }
  return (
    <tr className={css(styles.notHeader, isChecked && styles.rowChecked)}>
      <td>
        <input 
        type="checkbox" 
        checked={isChecked}
        onChange={handleCheckboxChange}
        />
        {textFirstCell}
        </td>
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

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#deb5b545',
  },
  notHeader: {
    backgroundColor: '3f5f5f5ab',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

export default CourseListRow;
