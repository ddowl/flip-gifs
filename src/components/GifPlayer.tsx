import * as React from 'react';
import './GifPlayer.css';

type Props = {
  src: string,
  title?: string,
  alt?: string,
}

class GifPlayer extends React.Component<Props, {}> {
  public render() {
    return (
      <div className="GifPlayer">
        This is the GifPlayer!
        <br/>
        <img src={this.props.src} title={this.props.title} alt={this.props.alt} />
      </div>
    );
  }
}

export default GifPlayer;