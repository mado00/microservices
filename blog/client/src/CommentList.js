import React from 'react';

export default ({ comments }) => {
  // const [comments, setComments] = useState([]);

  // const fetchData = async () => {
  //   const res = await axios.get(
  //     `http://localhost:4001/posts/${postId}/comments`
  //   );

  //   setComments(res.data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const renderedComments = comments.map(comment => {
    let content;

    // if (comment.status === 'approved') {
    //   content = comment.content;
    // }

    // if (comment.status === 'pending') {
    //   content = 'This comment is awaiting modaration';
    // }

    // if (comment.status === 'rejected') {
    //   content = 'This commet has been rejected';
    // }
 
    switch (comment.status) {
      case 'approved':
        content = comment.content;
        break;
      case 'pending':
        content = 'This comment is awaiting modaration';
        break;
      case 'rejected':
        content = 'This commet has been rejected';
        break;
      default: 
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};
