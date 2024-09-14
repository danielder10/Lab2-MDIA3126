import { View } from "react-native";
import Profile from "@/components/molecules/profile";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Profile
        bioText={`Hi, I'm John Smith, a 40-year-old tech enthusiast and father of two energetic kids. By day, I work as a systems analyst for a mid-sized company, making sure all the gears run smoothly in the world of databases and networks. I’ve always had a passion for figuring out how things work, whether it's the latest gadget or the inner workings of a complex system.

Outside of work, I’m all about balance. I spend my weekends hiking with my family, exploring new trails, and staying connected with nature. I’m also a huge fan of classic rock (still can’t get enough of The Rolling Stones), and I love tinkering with vintage guitars in my spare time.

At this stage in life, I’m focused on personal growth – trying to be a better husband, father, and just an all-around decent human being. I believe in staying curious, keeping an open mind, and never taking life too seriously. After all, we’re here for a good time, not a long time, right?`}
        
      />
    </View>
  );
}
