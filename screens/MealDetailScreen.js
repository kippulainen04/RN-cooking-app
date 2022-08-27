import { useContext, useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";

const MealDetailScreen = ({route, navigation}) => {
    const favoriteMealsCtx = useContext(FavoritesContext);

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    const { imageUrl, title, duration, complexity, affordability, ingredients, steps } = selectedMeal

    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

    const changeFavoriteStatusHandler = () => {
      if(mealIsFavorite) {
        favoriteMealsCtx.removeFavorite(mealId);
      } else {
        favoriteMealsCtx.addFavorite(mealId);
      }
    }

    useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => {
          return <IconButton 
          onPress={changeFavoriteStatusHandler} 
          icon={mealIsFavorite ? 'star' : 'star-outline'}
          color='white'
          />
        }
      })
    }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={{uri: imageUrl}}/>
      <Text style={styles.title}>{title}</Text>
      <MealDetails 
      duration={duration}
      complexity={complexity}
      affordability={affordability}
      textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={ingredients}/>
          <Subtitle>Steps</Subtitle>
          <List data={steps}/>
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  root: {
    marginBottom: 32
  },
  image: {
    width: '100%',
    height: 350
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white'
  },
  detailText: {
    color: 'white'
  },
  listOuterContainer: {
    alignItems: 'center'
  },
  listContainer: {
    maxWidth: '80%'
  }
})