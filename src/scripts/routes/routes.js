
import Discover from '../views/pages/discover';
import NowPlaying from '../views/pages/now-playing';
import Upcoming from '../views/pages/upcoming';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': Discover, // default page
  '/now-playing': NowPlaying,
  '/upcoming': Upcoming,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
