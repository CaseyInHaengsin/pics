import React from 'react';
import ReactDOM from 'react-dom';


class SearchBar extends React.Component{

    state = {
        term: ""
    };
    
    
    render(){
        return (
            <div className="ui segment">
            <form className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input 
                        type="text"
                        value={this.state.term}
                        onChange={(e) => this.setState({term: e.target.value.toUpperCase()})}
                        />

                </div>
            </form>
            </div>
            );
    }
}

export default SearchBar;