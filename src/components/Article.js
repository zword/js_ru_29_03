import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import { findDOMNode } from 'react-dom'
import toggleOpen from '../HOC/toggleOpen'

class Article extends Component {

    render() {
        const { article: { title }, isSelected } = this.props
        const style = isSelected ? {color: 'red'} : null
        return (
            <div ref = "articleContainer">
                <h3 onClick = {this.handleClick} style = {style}>{title}</h3>
                <a href = "#" onClick = {this.handleSelect}>select this article</a>
                {this.getBody()}
            </div>
        )
    }

    componentDidMount() {
/*
        console.log('---', this.refs);
        console.log('---', 'commentList: ', this.refs.commentList, findDOMNode(this.refs.commentList));
*/
    }

    componentWillReceiveProps(nextProps) {
//        console.log("componentWillReceiveProps: id = "+nextProps.article.id + " isOpen ? "+nextProps.isOpen);
        if (nextProps.isOpen) 
            if ( nextProps.article.id !== nextProps.openedId )
                nextProps.toggleOpen()
    }

    handleSelect = (ev) => {
        const { article: {id}, selectArticle } = this.props
        selectArticle(id)
    }

    getBody() {
        if (!this.props.isOpen) return null
        const { article } = this.props

        if ( article.id !== this.props.openedId ) 
            return null

        return (
            <section>
                {article.text}
                <CommentList 
                    comments = {article.comments}
                    ref = "commentList"
                    me = "list"
                    id = {article.id}
                />
            </section>
        )
    }

    handleClick = (ev) => {
        console.log("handleClick: id = "+this.props.article.id + " isOpen ? "+this.props.isOpen);
        if ( !this.props.isOpen ) {
            const { article: {id}, openOnlyMe } = this.props
            openOnlyMe(id);
        }

        this.props.toggleOpen()
    }
}

export default toggleOpen(Article)
