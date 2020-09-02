import React from 'react';
import streamThumbnail from '../../images/stream_thumbnail.jpg';
import {
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  Header,
  Avatar,
  UserName,
  TagRow,
  TagView,
  TagText,
  StreamDescription,
  StreamCategory,
  List,
} from './styles';

const StreamList: React.FC = () => {
  const StreamItem: React.FC = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />
      <StreamColumn>
        <StreamRow>
          <Header>
            <Avatar />
            <UserName numberOfLines={1}>Roberto Junior</UserName>
          </Header>
          <StreamDescription numberOfLines={1}>
            Muito bacana essa stream, você vai se arrepiar com a qualidade
          </StreamDescription>
          <StreamCategory numberOfLines={1}>Development and TI</StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Egirls</TagText>
          </TagView>
          <TagView>
            <TagText>Sanduiches ao vivo</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  );

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
