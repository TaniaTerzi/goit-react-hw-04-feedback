import React from "react";
import PropTypes from "prop-types";

const Section = ({title, children}) => 

<section>
<h1> {title} </h1>
<div> {children} </div>
</section>

export default Section ;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};