import './post.css'

function Post() {
  return (
    <div className="post">
        <img src="https://image.shutterstock.com/image-vector/sample-label-green-band-sign-260nw-1512261407.jpg" alt="" className="postImg" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem, ipsum dolor sit amet</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequatur rerum aliquid illum voluptates voluptate tempora fugit labore a, quo velit sunt et earum quaerat laboriosam excepturi numquam magnam veniam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequatur rerum aliquid illum voluptates voluptate tempora fugit labore a, quo velit sunt et earum quaerat laboriosam excepturi numquam magnam veniam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequatur rerum aliquid illum voluptates voluptate tempora fugit labore a, quo velit sunt et earum quaerat laboriosam excepturi numquam magnam veniam.
        </p>
    </div>
  )
}

export default Post