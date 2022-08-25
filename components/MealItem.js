import { Text, View, Pressable, Image, StyleSheet, Platform } from "react-native"

const MealItem = ({ title, imageUrl, duration, complexity, affordability, onPress }) => {
  return (
    <View style={styles.mealItem}>
        <Pressable
            android_ripple={{color: '#ccc'}} 
            style={({pressed}) => (pressed ? styles.buttonPressed : null)}
            onPress={onPress}
        >
            <View>
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailItem}>{duration}m</Text>
                    <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                </View>
            </View>
        </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 16,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    buttonPressed: {
        opacity: 0.5
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
})