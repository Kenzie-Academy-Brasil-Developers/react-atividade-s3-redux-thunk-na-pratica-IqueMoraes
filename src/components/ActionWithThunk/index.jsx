import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { addCommentThunk } from "../../store/modules/user/thunk"



export const Display = () => {
    const dispatch = useDispatch()
    const [userComments, setUserComments] = useState("")
    const user = useSelector(state => state.user)

    const handleAddComment = () => {
        dispatch(addCommentThunk(userComments))
        setUserComments("")
    }

    console.log(user)

    return (
        <div className="container">
            <div className="container-title">
                <h3>{user.name}</h3>
            </div>
            <input value={userComments} placeholder="Comment..." onChange={evt => setUserComments(evt.target.value)}/>{" "}

            {userComments === "" 
             ?
             <button onClick={() => handleAddComment(userComments)}>New comment</button>
             :
             <button onClick={() => handleAddComment(userComments)}>New comment</button>
            }
            
            <div className="user">
                {user.comments.map(us => <h4 key={us}>{us}</h4>)}
            </div>
        </div>
    )
}
