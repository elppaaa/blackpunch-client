import React from 'react';
import { PostHeaderWrapper } from './styled';
import { Badge } from 'evergreen-ui';
import { Post } from './index';
import UserAvatar from '../UserAvatar';

interface Props {
  post: Post;
}

const PostHeader: React.FC<Props> = ({ post }: Props) => {
  return (
    <PostHeaderWrapper>
      <span>{post.category.name}</span>
      <span>
        <div>{post.title}</div>
        <div>{post.createdAt}</div>
      </span>
      <span>
        <div>
          {post.tags.map((tag) => (
            <Badge color={tag.color} key={`post-${post.id}-${tag.id}`}>
              {tag.name}
            </Badge>
          ))}
        </div>
        <div>
          {/* Avatar -> UserAvatar 수정, 수정 필요  */}
          <UserAvatar size={25} /> {post.user.name}
        </div>
      </span>
    </PostHeaderWrapper>
  );
};

export default PostHeader;
