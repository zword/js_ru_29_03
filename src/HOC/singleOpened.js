import React, { Component as ReactComponent } from 'react'
import { findDOMNode } from 'react-dom'

export default (Component) => class SingleOpened extends ReactComponent {

    componentWillReceiveProps(nextProps) {
        const { article: {id} } = this.props

        if (nextProps.isOpen)
            if ( id !== nextProps.openedId )
                nextProps.toggleOpen()
    }

    render() {
        const { article: {id} } = this.props

        return <Component
                    {...this.props} 
                    isSingleOpened = {id === this.props.openedId}
               />
    }
}

