import React,{useMemo} from 'react';
import { Text } from 'react-native';
import {Wrapper,  Container, Main } from './styles';

interface Item{
  key: string;
  render: ()=> JSX.Element ;
  isTitle?: boolean;
}


const Following: React.FC = () => {
useMemo(()=>{

},[])

  return (
    <Wrapper>
    <Container>
      <Main/>
    </Container>
    </Wrapper>
  );
};

export default Following;
