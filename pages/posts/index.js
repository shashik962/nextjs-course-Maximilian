
import AllPosts from '../../components/posts/all-posts';

function AllPostsPage(props) {
  return (
    <AllPosts posts={props.posts} />
  );
}

export default AllPostsPage;