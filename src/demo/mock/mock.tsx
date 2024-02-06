import Hulu from "../../assets/images/hulu.jpeg";
import Instagram from '../../assets/images/instagram.png';
import Linkedin from '../../assets/images/linkedin.png';
import Snapchat from '../../assets/images/snapchat.png';
import Spotify from '../../assets/images/spotify.png';

import { CardData } from "../../lib";
import Content from "../components/Content";

export const mockData: CardData[] = [
  {
    id: 'da9a32c7e',
    meta: { apk: 'some-apk-d.apk' },
    src: Spotify,
    content: <Content title="Spotify: Music And Podcasts" description="Listen to songs, play podcasts, create playlists, and discover music you'll love" />,
  },
  {
    id: 'fc7e0bd4',
    meta: { apk: 'some-apk-b.apk' },
    src: Instagram,
    content: <Content title="Instagram" description="Instagram allows you to create and share your photos, stories, and videos with the friends and followers you care about." />,
  },
  {
    id: 'da9a7067',
    meta: { apk: 'some-apk-c.apk' },
    src: Linkedin,
    content: <Content title="LinkedIn: Jobs & Business News" description="Welcome professionals! Find jobs on one of the largest social networking apps with LinkedIn, the most trusted network and business community." />,
  },
  {
    id: 'da9afc7e',
    meta: { apk: 'some-apk-d.apk' },
    src: Snapchat,
    content: <Content title="Snapchat" description="Snapchat is a fast and fun way to share the moment with your friends and family." />,
  },
  {
    id: '88552078',
    meta: { apk: 'some-apk-a.apk' },
    src: Hulu,
    content: <Content title="Hulu: Stream TV Series & Films" description="Watch movies, new TV shows, Hulu Originals, and more with Hulu." />,
  }
]