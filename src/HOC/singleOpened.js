import React, { Component as ReactComponent } from 'react'

export default (Component) => class SingleOpened extends ReactComponent {
    /*
    state = {
        isOpen: false
    }

    singleOpened = (ev) => {
        if (ev) ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isOpen)
            if ( nextProps.article.id !== nextProps.openedId )
                nextProps.toggleOpen()
    }

    render() {
        const { article } = this.props

        if ( article.id !== this.props.openedId )
            return null

        return <Component {...this.props} singleOpened = {this.props.openOnlyMe}/>
    }
    */
    render() {
        return <Component {...this.props}/>
    }
}

