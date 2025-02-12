// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

export default class YouTubeDebugger extends Component{
    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }

      settings = () =>{
          this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }        
          })
      }

      resolution = () =>{
        this.setState({
            settings: {
              ...this.state.settings,
              video: {
                ...this.state.settings.video,
                resolution: '720p'
              }
            }      
          })
      }
    render(){

        return (
            <div>
                <button className='bitrate' onClick={this.settings}>Change bitrate</button>
                <button className='resolution' onClick={this.resolution} >Change resolution</button>
            </div>
        )
    }
}
