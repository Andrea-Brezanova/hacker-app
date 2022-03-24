function DataFetching(props) {
  

  return (
    <div className="posts">
      {props.dataObj.map((post) => (
        <div>
        <p key={post.id}>
          {post.title}
          <br />
          {post.url}
        </p>
        </div>
      ))}
      
    </div>
  );
}

export default DataFetching;
