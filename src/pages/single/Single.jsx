import './single.css'
import Sidebar from '../../components/siderbar/Sidebar'
import SinglePost from '../../components/singlePost/SinglePost'

function Single() {
  return (
    <div className="single">
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}

export default Single