import React from 'react';
import {
  CategoryContainer,
  CategoryImg,
  CategoryName,
  CategoryStatus,
  RedCircle,
  Info,
  List
} from './styles';
import data from './data';

interface ItemProps {
  item: typeof data[0];
}

const CategoryList: React.FC = () => {
  const CategoryItem: React.FC<ItemProps> = ({item}) => (
    <CategoryContainer>
    <CategoryImg source={item.source}/>
    <CategoryName numberOfLines={1} >
   {item.name}
    </CategoryName>
    <CategoryStatus>
    <RedCircle/>
    <Info >51.9k</Info>
    </CategoryStatus>
    </CategoryContainer>
    )

    return (
      <List>
      {data.map( (ListItem)=> (
        <CategoryItem key={ListItem.name} item={ListItem}/>
       ) )}
      </List>
      );
    };

    export default CategoryList;
