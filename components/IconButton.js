import { Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';


function HeartIconButton({onPress, color, icon}){
    return (
        <Pressable onPress={onPress}>
            <Ionicons name={icon} size={24} color={color} />
        </Pressable>
    )
}

export default HeartIconButton;