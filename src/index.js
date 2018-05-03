/**
 * @version 0.0.1
 * @name npm-component-project-template
 * @description by Dawdler
 * @author jinke.li
 */

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./styles/index.less";

export default class YourComponent extends PureComponent {
  state = {};
  static defaultProps = {};
  static propTypes = {};
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h2 className="title" key="title">
          react-component-project-template
        </h2>
        <p key="p">
          By:<a href="https://github.com/lijinke666/dawdler" target="_blank">
            Dawdler
          </a>
        </p>
      </>
    );
  }
}
