import React from 'react'
import SearchGithub from '../components/github/search-github.jsx'

class Main extends React.Component {
    render(){
        console.log('props',this.props)
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="col-sm-7 col-sm-offset-2" style={{marginTop:15}}>
                        <SearchGithub history={this.props.history}/>
                    </div>
                </nav>
                <div className="container" >
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Main