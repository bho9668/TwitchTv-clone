/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useMemo } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import { Wrapper, Container, Main } from './styles';
import Heading from '../../components/Heading';
import Title from '../../components/Title';
import Header from '../../components/Header';
import CategoryList from '../../components/CategoryList';
import StreamList from '../../components/StreamList';
import ChannelList from '../../components/ChannelList';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  const { data, indexes } = useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Following</Heading>,
      },
      {
        key: 'FOLLOWERD_CATEGORIES',
        render: () => <Title>Followed Categories</Title>,
        isTitle: true,
      },
      { key: 'C1', render: () => <CategoryList /> },
      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>Live Channels</Title>,
        isTitle: true,
      },
      { key: 'C2', render: () => <StreamList /> },
      {
        key: 'CONTINUE_WATCHING',
        render: () => <Title>Continue Watching</Title>,
        isTitle: true,
      },
      { key: 'C3', render: () => <StreamList /> },
      {
        key: 'OFFLINE_CHANNELS',
        render: () => <Title>Offline channels</Title>,
        isTitle: true,
      },
      { key: 'C4', render: () => <ChannelList /> },
    ];
    const indexes: number[] = [];

    items.forEach((item, index) => item.isTitle && indexes.push(index));

    return {
      data: items,
      indexes,
    };
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={item => item.key}
            stickyHeaderIndices={indexes}
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
