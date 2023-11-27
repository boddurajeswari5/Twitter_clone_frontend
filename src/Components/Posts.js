import React from "react";
import {
  FaRegCheckCircle,
  FaComment,
  FaRegChartBar,
  FaHeart,
  FaLeaf,
} from "react-icons/fa";
const Posts = () => {
  return (
    <div className="postss">
      <div className="postss__first">
        <div className="posts__first__img">
          <img src="https://th.bing.com/th/id/OIP.IghQanI1mk5ksw8Sy7-eYQHaNK?rs=1&pid=ImgDetMain" alt="profile img" />
        </div>
        <div className="posts__first__name">
          <strong>Abdul Hakeem</strong> <FaRegCheckCircle className="verify" />
        </div>
        <div className="posts__first__username">
          @hakeem12 <span>6m</span>
        </div>
      </div>
      <div className="postss__details">
        <div className="postss__details__msg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima id
          iure, enim pariatur ullam eligendi vero possimus ad error nemo. Facere
          aliquid dolores placeat vitae accusamus excepturi officiis magnam
          pariatur?
        </div>
        <div className="postss__details__img">
          <img src="https://th.bing.com/th/id/OIP.i-qHbUmdeKFxi-edEmS8YQHaE8?rs=1&pid=ImgDetMain" alt="post" />
        </div>
        <div className="reactions">
          <span>
            <FaComment className="re" /> 45
          </span>
          <span>
            <FaRegChartBar className="re" /> 4
          </span>
          <span>
            <FaHeart className="re" /> 345
          </span>
          <span>
            <FaLeaf className="re" /> 234
          </span>
        </div>
      </div>
    </div>
  );
};

export default Posts;