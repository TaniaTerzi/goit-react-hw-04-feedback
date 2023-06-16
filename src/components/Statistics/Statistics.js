import React from "react";
import PropTypes from "prop-types";
import css from './Statistics.module.css';

const Statistics = ({good, neutral, bad, total, percentage}) => 

<div className={css.statistic}>
    <span className={css.text}>Good: {good} </span>
    <span className={css.text}>Neutral: {neutral}</span>
    <span className={css.text}>Bad: {bad}</span>
    <span className={css.text}>Total: {total}</span>
    <span className={css.text}>Positive Feedback: {percentage} %</span>
</div>

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
};