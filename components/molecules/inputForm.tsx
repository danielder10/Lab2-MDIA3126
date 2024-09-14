import { View, TextInput } from "react-native";
import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Bio";

export default function InputForm( {labelText, buttonText, sampleText}) {
    return(
    <View>
            <Label labelText={labelText}/>
            <TextInput placeholder={sampleText}/> 
            <Button buttonText={buttonText}/>
    </View>
    )
}