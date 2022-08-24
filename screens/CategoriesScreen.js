import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data"




const CategoriesScreen = ({ navigation }) => {
    const pressHandler = () => {
        navigation.navigate('Meals Overview')
    }

    const renderCategoryItem = (itemData) => {
        return (
        <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>
        )
    }


    return (
    <FlatList 
    data={CATEGORIES}
    renderItem={renderCategoryItem}
    keyExtractor={(item) => item.id}
    numColumns={2}
    />
    )
}

export default CategoriesScreen