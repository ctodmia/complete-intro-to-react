/*global React ReactDOM*/
var div = React.DOM.div
var h1 = React.DOM.h1
var MyTitle = React.createClass({
  render () {
    return (
      div(null, 
        h1({style: {color: this.props.color}}, this.props.title)
      )
    )
  }
})
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
