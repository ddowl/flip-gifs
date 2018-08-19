import * as React from 'react';
import GifPlayer from './GifPlayer'
import './Body.css';

let gifNames = ['alc', 'brown', 'camera', 'handrail', 'human', 'interview', 'trampoline'];

let gifUrls = gifNames.map((name) => {
  return `gifs/${name}-flip.gif`
});

class Body extends React.Component {
  public render() {
    const gifs = gifUrls.map((url, i) => {
      return <GifPlayer key={i} src={url} />
    });
    return (
      <div className="Body">
        This is the Body!
        { gifs }
      </div>
    );
  }
}

export default Body;