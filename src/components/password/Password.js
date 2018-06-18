import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Password extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      rules: props.rules
    };
  }

  inputOnChange = event => {
    const password = event.target.value;
    this.setState({ password: password }, () => {
      this.validatePassword(this.state.password);
    });
  };

  validatePassword(password) {
    if (!this.state.rules) return;

    const valid = this.state.rules.map((ruleData, index) => {
      const valid = ruleData.rule.test(password);

      var stateCopy = Object.assign({}, this.state);
      stateCopy.rules[index].valid = valid;
      this.setState(stateCopy);
    });
  }

  render() {
    return (
      <section>
        <input
          id="userPassword"
          type="password"
          onChange={this.inputOnChange}
        />
      </section>
    );
  }
}

Password.defaultProps = {
  rules: [
    {
      name: "min chars",
      rule: /^.{6,}$/,
      message: "Minimum of six characters",
      valid: false
    },
    {
      name: "Capital letter",
      rule: /[A-Z]/,
      message: "You need at least one capital letter",
      valid: false
    },
    {
      name: "Capital letter",
      rule: /\d/,
      message: "You need at least one digit",
      valid: false
    },
    {
      name: "Lower letter",
      rule: /[a-z]/,
      message: "You need at least one lower case letter",
      valid: false
    }
  ]
};

Password.propTypes = {
  rules: PropTypes.object
};

export default Password;
