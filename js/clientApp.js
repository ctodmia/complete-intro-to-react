var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./myTitle')
var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)
var ce = React.createElement
var MyFirstComponent = (
  div(null,
    MyTitleFactory({color: 'purple', title: 'Props are great'}),
    React.createElement(MyTitle, {color: 'red', title: 'Yo mama deserved better'}),
    ce(MyTitle, {color: 'green', title: 'You got This!'})
    )
  )
ReactDOM.render(MyFirstComponent, document.getElementById('app'))
