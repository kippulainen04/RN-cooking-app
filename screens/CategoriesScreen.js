import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data"


const renderCategoryItem = (itemData) => (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>
)

const CategoriesScreen = () => (
    <FlatList 
    data={CATEGORIES}
    renderItem={renderCategoryItem}
    keyExtractor={(item) => item.id}
    numColumns={2}
    />
)

export default CategoriesScreen