import React from "react"
import Router from "react-router"
import UserProfile from './github/UserProfile.jsx'
import Repos from './github/Repos.jsx'
import Notes from './notes/notes.jsx'
import getGithubInfo from '../services/github-service.jsx'
import Rebase from 're-base'

const base = Rebase.createClass('https://resplendent-inferno-8513.firebaseio.com/')

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notes: [],
            bio: {},
            repos: []
        }
    }
    componentDidMount(){
        this.init(this.props.params.username)
    }
    componentWillReceiveProps(nextProps){
        base.removeBinding(this.ref);
        this.init(nextProps.params.username);
    }
    componentWillUnmount(){
        base.removeBinding(this.ref);
    }
    init(username){
        this.ref = base.bindToState(this.props.params.username, {
            context: this,
            asArrray: true,
            state: 'notes'
        });

        getGithubInfo(username)
            .then(function(data){
                this.setState({
                    bio: data.bio,
                    repos: data.repos
                })
            }.bind(this))
    }
    handleAddNote(newNote){
        base.post(this.props.params.username, {
            data: this.state.notes.concat([newNote])
        })
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={this.props.params.username} bio={this.state.bio} />
                </div>
                <div className="col-md-4">
                    <Repos username={this.props.params.username} repos={this.state.repos}/>
                </div>
                <div className="col-md-4">
                    <Notes
                        username={this.props.params.username}
                        notes={this.state.notes}
                        addNote={(newNote) => this.handleAddNote(newNote)} />
                </div>
            </div>
        )
    }
}

export default Profile
