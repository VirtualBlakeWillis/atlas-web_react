import React from "react";
import BodySection from "./BodySection";
import PropTypes from "prop-types";

import { StyleSheet, css } from "aphrodite";


export default function BodySectionWithMarginBottom(props) {
  return (
    <div className={css(styles.bodySectionWithMargin)}>
      <BodySection {...props} />
    </div>
  );
}

BodySectionWithMarginBottom.defaultProps = {
  title: "",
  children: []
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: "40px"
  }
});