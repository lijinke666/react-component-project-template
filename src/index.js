
/**
 * @version 0.0.1
 * @name npm-component-project-template
 * @description by Dawdler
 * @author jinke.li
 */

import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import ReactDOM from "react-dom"
import classNames from "classnames"

import "./index.less"

export default class ComponentName extends PureComponent {
  state = {
  }
  static defaultProps = {
  }
  static PropTypes = {
  }
  constructor(props) {
    super(props)
  }
  render() {
    return [
      <h2 className="title">react-component-project-template</h2>,
      <p>By:<a href="https://github.com/lijinke666/dawdler" target="_blank">Dawdler</a></p>
    ]
  }
}
