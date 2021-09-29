import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunk";

export default function ActionWithThunk() {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const user = useSelector((state) => state.user);

  const handleClick = () => {
    dispatch(addCommentThunk(comment));
  };

  console.log(user.comments);

  return (
    <div>
      <h2>{user.name}</h2>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={() => handleClick(comment)}>Novo comentário</button>

      <div>
        {user.comments.map((item, index) => (
          <p key={index}> - {item}</p>
        ))}
      </div>
    </div>
  );
}
