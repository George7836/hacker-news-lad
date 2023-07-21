import { styled } from 'styled-components'
import { INewsPage } from '../types/news'
import { useState } from 'react'

type CommentProps = {
  user: string
  timeAgo: string
  content: string
  comments: INewsPage[]
}

const CommentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 25px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(36,41,47, 0.2);
`

const Author = styled.span`
  font-weight: 600;
  margin-bottom: 5px;
`

const Time = styled.span`
  color: rgb(36,41,47);
  opacity: 0.5;
  font-size: 14px;
`

const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`

const Replies = styled.button`
  color: rgb(255,102,0);
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`

const NestedComment = styled.div`
  margin-left: 20px;
`

export default function Comment({user, timeAgo, content, comments}: CommentProps) {
  const [isCommented, setIsCommented] = useState(false)

  return (
    <>
      <CommentBlock>
        <Author>{user}</Author>
        <div dangerouslySetInnerHTML={{ __html: `${content}` }}/>
        <Bottom>
          <Time>{timeAgo}</Time>
          {comments.length 
            ? 
              <Replies
                onClick={() => setIsCommented((prev) => !prev)}
              >
                {isCommented ? 'Hide' : 'Show Replies'} 
              </Replies>
            : null
          }
        </Bottom>
      </CommentBlock>
      {isCommented && 
        comments.map((el) => (
          <NestedComment
            key={el.id}
          >
            <Comment 
              user={el.user!} 
              comments={el.comments} 
              timeAgo={el.time_ago} 
              content={el.content}
            />
          </NestedComment>
        ))
      }
    </>
  )
}