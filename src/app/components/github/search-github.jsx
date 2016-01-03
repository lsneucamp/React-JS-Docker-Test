import React from 'react'
import Router from 'react-router'

class SearchGithub extends React.Component {
    getRef(ref) {
        this.usernameRef = ref;
    }
    handleSubmit() {
        var username = this.usernameRef.value;
        this.usernameRef.value = "";
        this.props.history.pushState(null, "/profile/" + username);
    }
    render() {
        return (
            <div className="col-xs-12">
                <form onSubmit={() => this.handleSubmit()} className="form-inline row">
                    <div className="form-group" onSubmit={this.handleSubmit}>
                        <input type="text" className="form-control" ref={(ref) => {this.getRef(ref)}}/>
                    </div>
                    <button className="btn btn-block btn-primary form-control">Search Github</button>
                </form>
            </div>
        )
    }
}

SearchGithub.propTypes = {
    history: React.PropTypes.object.isRequired
};

export default SearchGithub