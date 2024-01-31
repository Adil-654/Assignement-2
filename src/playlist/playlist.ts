import trackOne from './songs/satranga.mp3';
import trackTwo from './songs/janiye.mp3';
import trackThree from './songs/Kis Gali.mp3';
import trackFour from './songs/Mashup.mp3';
import coverArtOne from './cover-art/1.jpg';
import coverArtTwo from './cover-art/2.jpg';
import coverArtThree from './cover-art/3.jpg';
import coverArtFour from './cover-art/4.jpg';
import { Playlist } from '../audioplayer/types';

const playlist: Playlist = [
  {
    audioSrc: trackOne,
    metadata: {
      title: 'Satranga',
      artist: 'Arijit Singh',
      coverArtSrc: coverArtOne,
    },
  },
  {
    audioSrc: trackTwo,
    metadata: {
      title: 'Jaaniye',
      artist: 'Visahl Mishra',
      coverArtSrc: coverArtTwo,
    },
  },
  {
    audioSrc: trackThree,
    metadata: {
      title: 'Kis Gali',
      artist: 'Atif Aslam',
      coverArtSrc: coverArtThree,
    },
  },
  {
    audioSrc: trackFour,
    metadata: {
      title: 'Mashup',
      artist: 'Mashup',
      coverArtSrc: coverArtFour,
    },
  },
];

export default playlist;
