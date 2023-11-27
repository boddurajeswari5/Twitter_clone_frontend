
import React from "react";
import {
  FaRegImage,
  FaRegListAlt,
  FaRegSmile,
  FaCalendarCheck,
} from "react-icons/fa";
const CreateTweet = () => {
  return (
    <div className="create">
      <div className="create__first">
        <div className="create__img">
          <img src="https://th.bing.com/th/id/OIP.IghQanI1mk5ksw8Sy7-eYQHaNK?rs=1&pid=ImgDetMain" alt="profile img" />
        </div>
        <div className="create__input">
          <input
            type="text"
            className="create__control"
            placeholder="What's happing?"
          />
        </div>
      </div>
      <div className="create__second">
        <div className="create__icons">
          <FaRegImage className="ic" />
          <FaRegListAlt className="ic" />
          <FaRegSmile className="ic" />
          <FaCalendarCheck className="ic" />
        </div>
        <div className="create__btn">
          <button>Tweet</button>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;