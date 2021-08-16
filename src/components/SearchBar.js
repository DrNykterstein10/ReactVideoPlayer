import React from 'react';

class SearchBar extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {searchTerm : ''};
    }

    onInputChange = (event) => {
        this.setState({searchTerm : event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.searchTerm);
    }

    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value ={this.state.searchTerm} onChange={this.onInputChange}></input>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;