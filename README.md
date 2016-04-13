# redux-intl

Simple bindings between [react-intl](https://github.com/yahoo/react-intl) and [redux](https://github.com/reactjs/redux).

## Installation

```console
$ npm install --save react react-intl react-redux redux redux-intl
```

## Usage

```javascript
// ES6 Syntax

import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import ReduxIntl, { reducer as intl, setLocale } from 'redux-intl'

const rootReducer = combineReducers({ intl })
const store = createStore(rootReducer)

store.dispatch(setLocale('en', {
  'hello': 'Hello World!'
}))

ReactDOM.render(
  <Provider store={store}>
    <ReduxIntl>
      <FormattedMessage id='hello' />
    </ReduxIntl>
  </Provider>,
  document.getElementById('root')
)
```
