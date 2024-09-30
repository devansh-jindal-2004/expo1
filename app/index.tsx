import { Link } from "expo-router";
import { Text, View } from "react-native";

const Index = ()=> {

  // const router = Router()

  // router.navi("index")
  return(
    <View style={{ margin:50, marginTop:200}}>
      <Text style={{fontSize:40, fontWeight: 900}}>Hi</Text>
      <View style={{marginTop:20}}>
      <Link href={"/about"} style={{fontSize:50, color:"blue"}} >go to about </Link>
      <Link href={"/(tab)/profile"} style={{fontSize:50, color:"blue"}} >go to Profile </Link>
      </View>
    </View>
  )
}

export default Index;