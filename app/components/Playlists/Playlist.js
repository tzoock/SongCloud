import React from "react";
import SongCard from "../SongCard";
import uuid from "uuid";

export default class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      elm: this.focusMe
    };

  }

  playlistNameToInput() {
    this.props.changeEditMode(this.props.playlistIndex);

  }


  inputToName(event) {

    if (event.key === 'Enter' || event.type==='blur') {

      this.props.changeEditMode(this.props.playlistIndex);

      this.props.changePlaylistName(event.target.value, this.props.playlistIndex)

    }

  }


  handlePlaylistNameChange(event) {

    this.setState(Object.assign({}, {value: event.target.value}));

  }

  componentDidUpdate() {
    if (this.props.playlist.editMode) {
      this.focusMe.focus()
    }
  }

  componentDidMount() {
    if (this.props.playlist.editMode) {
      this.focusMe.focus()
    }
  }


  render() {
    return (
      <div>


        { this.props.playlist.editMode ?
                   <div className="playlist-header">
            <input type="text"
                   className='input-playlist-name'
                   onKeyDown={(event) => {
                     this.inputToName(event)
                   }}
                   placeholder ={this.props.playlist.title}
                   onChange={() => {
                     this.handlePlaylistNameChange(event)
                   }}
                   onBlur={(event)=>{this.inputToName(event)}}
                   ref={(inpElm) => {
                     this.focusMe = inpElm
                   }}/>
          </div>
        :
          <div className="playlist-header">
            <div className='playlist-name'
                 onClick={() => {
                   this.playlistNameToInput()
                 }}>
              {this.props.playlist.title}
            </div>
            <span className="song-count">{this.props.playlist.songs.length}</span>
          </div>}

        <div className="playlist-content">
          {this.props.playlist.songs.length > 0 ?
            this.props.playlist.songs.map((song, i) => (
              <div key={uuid()} className="song-card">
                <SongCard song={song}
                          updateCurrentTrack={this.props.updateCurrentTrack}
                          playlists={this.props.playlists}
                          from={this.props.from}/>
              </div>)
            )
            :
            <div className="emptyPlaylist">
              <h3>Please add some song to the playList</h3>
            </div>
          }

        </div>
      </div>
    )

  }
}
