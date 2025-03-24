import { Outlet } from 'react-router-dom';
import PostsList from '../components/PostsList';
import '../main.css'
function Posts() {

  const [modalIsVisible, setModalIsVisible] = useState(true);

  return (
    <>
      <Outlet/>
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;
