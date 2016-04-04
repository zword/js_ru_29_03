import React, { Component as ReactComponent } from 'react'

export default (Component) => class ToggleOpen extends ReactComponent {
    state = {
        isOpen: false
    }

    toggleOpen = (ev) => {
        if (ev) ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })

       if ( this.props.me === "article" )
           console.log("ToggleOpen Article: isOpen ? "+this.state.isOpen+", id = "+this.props.article.id)
       else
           console.log("ToggleOpen CommentList: isOpen ? "+this.state.isOpen+", id = "+this.props.id)
    }

    render() {
       if ( this.props.me === "article" )
           console.log("render Article: isOpen ? "+this.state.isOpen+", id = "+this.props.article.id)
       else
           console.log("render CommentList: isOpen ? "+this.state.isOpen+", id = "+this.props.id)
//        console.log("ToggleOpen-render: isOpen ? "+this.state.isOpen+", id = "+this.props.article.id)
        return <Component {...this.props} isOpen = {this.state.isOpen} toggleOpen = {this.toggleOpen}/>
    }
}
