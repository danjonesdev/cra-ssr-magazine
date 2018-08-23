import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class SearchInput extends Component {
  constructor() {
    super();
    this.state = {
      fireRedirect: false,
      inputValue: '',
    };
  }

  updateInputValue = evt => {
    this.setState({ inputValue: evt.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    this.setState({ fireRedirect: true });
  };

  redir = () => {
    console.log(this.props);
    if (this.state.fireRedirect) {
      this.setState({ fireRedirect: false });
      if (this.state.inputValue) {
        this.setState({ inputValue: '' });
        this.props.onSearch();
        return <Redirect push to={`/search/${this.state.inputValue}`} />;
      }
      return false;
    }
    return false;
  };

  render() {
    const { containerStyles } = this.props;

    return (
      <React.Fragment>
        <form
          className={containerStyles}
          action="#"
          onSubmit={this.submitForm}
        >
          <input
            className="nav__mobile__search  t-title  f5  light-grey  mt3  ml3  w-70  bb  bc-light-grey  pr3  pv2"
            type="search"
            placeholder="Search by keyword"
            value={this.state.inputValue}
            onChange={evt => this.updateInputValue(evt)}
          />
          <button className="searchInput__submit  cp" tyle="submit">
            go
          </button>
        </form>
        {this.redir()}
      </React.Fragment>
    );
  }
}

export default SearchInput;
