import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import { Star, Send } from 'lucide-react';

const VideoPage = () => {
  const { id } = useParams();
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  
  // Mock video data - replace with actual data fetching in a real app
  const video = {
    id: id,
    title: "Sample Martial Arts Video",
    url: "https://example.com/video.mp4",
    description: "This is a sample martial arts instructional video."
  };

  // Mock comments - replace with actual data in a real app
  const [comments, setComments] = useState([
    { id: 1, user: "User1", text: "Great video!", rating: 5 },
    { id: 2, user: "User2", text: "Very informative", rating: 4 },
  ]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== '' && rating > 0) {
      const newComment = {
        id: comments.length + 1,
        user: "CurrentUser", // Replace with actual user data
        text: comment,
        rating: rating
      };
      setComments([...comments, newComment]);
      setComment('');
      setRating(0);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <VideoPlayer videoUrl={video.url} title={video.title} />
      <h2 className="text-2xl font-bold mt-4">{video.title}</h2>
      <p className="mt-2">{video.description}</p>

      <div className="mt-8">
        <h3 className="text-xl font-semibold">Comments and Ratings</h3>
        <form onSubmit={handleCommentSubmit} className="mt-4">
          <div className="flex mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={24}
                onClick={() => setRating(star)}
                fill={star <= rating ? "gold" : "none"}
                stroke={star <= rating ? "gold" : "currentColor"}
                className="cursor-pointer"
              />
            ))}
          </div>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Write your comment..."
          />
          <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded flex items-center">
            <Send size={16} className="mr-2" />
            Submit
          </button>
        </form>

        <div className="mt-4">
          {comments.map((comment) => (
            <div key={comment.id} className="border-b py-2">
              <div className="flex justify-between">
                <span className="font-semibold">{comment.user}</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      fill={star <= comment.rating ? "gold" : "none"}
                      stroke={star <= comment.rating ? "gold" : "currentColor"}
                    />
                  ))}
                </div>
              </div>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
