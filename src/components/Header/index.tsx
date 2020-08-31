import React from 'react';
import {Container} from './styles'
import colors from '../../styles/colors';
import {MaterialCommunityIcons, Feather, MaterialIcons } from '@expo/vector-icons';
import {Avatar, OnLineStatus, RightButtons, Button} from './styles'



const Header: React.FC = ()=>{
  return (
<Container>
  <Avatar>
    <OnLineStatus/>
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
      <Feather
      name="search"
      size={26}
      color={colors.black}
      />
    </Button>
  </RightButtons>
</Container>
  );
};

export default Header;
