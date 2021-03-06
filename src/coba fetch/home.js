import React, { Component, Fragment, setState, useRef } from 'react'
import axios from 'axios'
import { VideoComponent } from './VideoComponent';
import { withRouter } from 'react-router-dom';
import { Iframe } from './iframe';
import './home.css'


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
            muncul: false,
            value: "",
            visible: 3,
            muncul2: false
        }
    }

    componentDidMount() {
        this.state.muncul = true
        axios.get('https://api-tomcatsquad.herokuapp.com/api/v1/video/')
            .then((res) => {
                this.setState(
                    this.state.result = res.data.results
                )
            })
    }

    tes = (url) => {
        this.props.history.push({ pathname: `/watch?id=${url}` })
        window.location.reload()
    }

    EnterHandle = (e) => {
        this.setState({ value: e.target.value })
        if (e.key === 'Enter') {
            this.props.history.push({ pathname: `/search?title=${this.state.value}` })
            window.location.reload()
        }
    }

    handleKeyPress = (e) => {
        this.setState({value:e.target.value})
        console.log(this.state.value)
    }

    loadMorehandle() {
        this.setState({ visible: + this.state.visible + 5 })
        console.log(this.state.visible)
        if (this.state.result.length <= this.state.visible) {
            this.state.muncul2 = true
        }
        console.log(this.state.muncul2)
    }
    
    render() {

        return (
            <div>
                <input type="text" onKeyUp={this.handleKeyPress} onKeyDown={this.EnterHandle} />
                <div className={this.state.muncul ? 'hilang' : 'muncul'} >
                    loading ngab
                </div>
                <ol>
                    <Fragment>
                    {
                        this.state.result.slice(0, this.state.visible).map((result) => {
                            return <VideoComponent title={result.title} url={result.id} klik={this.tes} />
                        })
                    }
                    </Fragment>
                </ol>
                <div className={this.state.muncul2 ? 'hilang' : ''}>
                    <button onClick={() => { this.loadMorehandle(this.state.visible) }}>load more</button>
                </div>
            </div>
        )
    }


}

export default withRouter(Home)
