import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import LoadingSpinner from './LoadingSpinner';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {loading : false, videos : [] , selectedVideo:null};
    }

    onSearchSubmit = async (searchTerm) => {
        this.setState({loading:true});
        const response = await youtube.get('/search',{
            params: {
                q : searchTerm
            }
        });
        this.setState({
            videos : response.data.items,
            loading:false,
            selectedVideo : response.data.items[0]
        });
        
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo:video});
    }

    render(){
        if(this.state.loading){
            return <LoadingSpinner />;
        }
        return(
            <div className="ui container" style={{marginTop:'20px'}}>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                          <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                          <VideoList onVideoSelect={this.onVideoSelect} videos = {this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;