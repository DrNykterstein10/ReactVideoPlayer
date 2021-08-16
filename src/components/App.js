import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import LoadingSpinner from './LoadingSpinner';
import VideoList from './VideoList';

class App extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {loading : false, videos : []};
    }

    onSearchSubmit = async (searchTerm) => {
        this.setState({loading:true});
        const response = await youtube.get('/search',{
            params: {
                q : searchTerm
            }
        });
        this.setState({videos : response.data.items, loading:false});
    }

    render(){
        if(this.state.loading){
            return <LoadingSpinner />;
        }
        return(
            <div className="ui container" style={{marginTop:'20px'}}>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <VideoList videos = {this.state.videos} />
            </div>
        );
    }
}

export default App;