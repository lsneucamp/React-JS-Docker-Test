import React from 'react'
import AppActions from '../actions/app-actions.jsx'

class Hi extends React.Component {
    render(){
        return (
            <div onClick={AppActions.addItem.bind(null,'this is the item')}>
                Hello, {this.props.name}!

            </div>
        )
    }
}

export default Hi