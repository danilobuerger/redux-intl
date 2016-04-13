var assign = require('object-assign')
var React = require('react')
var connect = require('react-redux').connect
var IntlProvider = require('react-intl').IntlProvider

var SET_LOCALE = '@@redux-intl/SET_LOCALE'

function setLocale (locale, messages) {
  return {
    type: SET_LOCALE,
    payload: {
      locale: locale,
      messages: messages
    }
  }
}

var initialState = {
  locale: null,
  messages: {}
}

function reducer (state, action) {
  state = state || initialState
  switch (action.type) {
    case SET_LOCALE:
      return assign({}, state, action.payload)
    default:
      return state
  }
}

var ReduxIntl = React.createClass({
  propTypes: {
    locale: React.PropTypes.string,
    messages: React.PropTypes.object.isRequired,
    children: React.PropTypes.element.isRequired
  },
  render: function () {
    if (!this.props.locale) {
      return null
    }
    return React.createElement(IntlProvider, {
      locale: this.props.locale,
      messages: this.props.messages
    }, React.Children.only(this.props.children))
  }
})

function mapStateToProps (state) {
  return {
    locale: state.intl.locale,
    messages: state.intl.messages
  }
}

module.exports = connect(mapStateToProps)(ReduxIntl)
module.exports.SET_LOCALE = SET_LOCALE
module.exports.setLocale = setLocale
module.exports.reducer = reducer
