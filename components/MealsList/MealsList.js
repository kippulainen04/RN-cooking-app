import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "./MealItem";

const MealsList = ({items}) => {
    const renderMealItem = (itemData) => {
        const { id, title, imageUrl, duration, complexity, affordability } = itemData.item
    
        return (
          <MealItem 
          title={title} 
          imageUrl={imageUrl}
          duration={duration}
          complexity={complexity}
          affordability={affordability}
          id={id}
          />
        );
      }
    
      return (
        <View style={styles.container}>
            <FlatList 
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={renderMealItem}
            />
        </View>
      );
}

export default MealsList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})