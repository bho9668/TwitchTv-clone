import React from 'react';
import {
  MaterialCommunityIcons,
  Feather,
  MaterialIcons,
} from '@expo/vector-icons';
import {
  Container,
  Avatar,
  OnLineStatus,
  RightButtons,
  Button,
} from './styles';
import colors from '../../styles/colors';

const Header: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <OnLineStatus />
      </Avatar>

      <RightButtons>
        <Button>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        </Button>
        <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={colors.black}
          />
        </Button>
        <Button>
          <Feather name="search" size={26} color={colors.black} />
        </Button>
      </RightButtons>
    </Container>
  );
};

export default Header;
