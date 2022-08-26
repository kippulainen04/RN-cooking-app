import { Text } from "react-native"

const MealDetailScreen = ({route}) => {
    const mealId = route.params.mealId;
  return (
    <Text>
        {mealId}
    </Text>
  )
}

export default MealDetailScreen