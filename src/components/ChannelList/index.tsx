import React from 'react';
import { Text } from 'react-native';

import {
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
  RightSide,
  WhiteCircle,
  List,
} from './styles';

const ChannelList: React.FC = () => {
  const ChannelItems = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>Roberto Junior</Username>
          <Info>1cento50 new Videos</Info>
        </Column>
      </LeftSide>
      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  );

  return (
    <List>
      <ChannelItems />
      <ChannelItems />
      <ChannelItems />
      <ChannelItems />
    </List>
  );
};

export default ChannelList;
