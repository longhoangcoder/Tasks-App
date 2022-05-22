import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";

const colors = {
  themeColor: "#4263ec",
  white: "#fff",
  background: "#f4f6fc",
  greyish: "#a4a4a4",
  tint: "#2b49c3",
};

const tasks = [
  {
    task: "Morning Walk",
    icon: "hiking",
    theme: "#008b8b",
    stamp: "Today. 5am",
  },
  {
    task: "Meet Scum Team",
    icon: "account-tie",
    theme: "#37003c",
    stamp: "Today. 5am",
  },
  {
    task: "Shopping with familly",
    icon: "cart",
    theme: "#fed132",
    stamp: "Today. 5am",
  },
  {
    task: "Legs Day",
    icon: "weight",
    theme: "#fed132",
    stamp: "Sunday. 5am",
  },
];

const Task = ({ task, icon, theme, stamp }) => {
  return (
    <View style = {{
      backgroundColor:colors.white,
      flexDirection:"row",
      marginHorizontal:16,
      marginVertical:4,
      borderRadius:20,
      paddingHorizontal:24,
      paddingVertical:20
    }}>
      <View style = {{flexDirection:"row"}}  >
        <MaterialCommunityIcons
          name={icon}
          size={30}
          style={{ color: theme, justifyContent:"center" }}
        />
        <View style = {{marginLeft:10, justifyContent:"center"}}>
          <Text style = {{fontSize:16}}>{task}</Text>
          <Text style = {{color: colors.greyish}}>{stamp}</Text>
        </View>
      </View>
    </View>
  );
};
export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View>
          <View style={styles.headerContainer}>
            <MaterialCommunityIcons
              name="text"
              size={30}
              style={{ color: colors.white }}
            />
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="bell-outline"
                size={30}
                style={{ color: colors.white }}
              />
              <AntDesign
                name="user"
                size={30}
                style={{ color: colors.white }}
              />
            </View>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{"Welome back, \nHoang Long Ly"} </Text>
            <View style={styles.searchbox}>
              <MaterialCommunityIcons
                name="magnify"
                size={30}
                style={{ color: colors.white }}
              />
              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons
                  name="microphone"
                  size={30}
                  style={{ color: colors.white }}
                />
                <MaterialCommunityIcons
                  name="tune"
                  size={30}
                  style={{ color: colors.white }}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Text style={{ fontSize: 24 }}>Tasks</Text>
          <MaterialCommunityIcons
            name="plus"
            size={40}
            style={{
              color: colors.themeColor,
              marginHorizontal: 8,
            }}
          />
        </View>

        <ScrollView style = {{backgroundColor:colors.background}}>
          {tasks.map((task) => (
            <Task
              task={task.task}
              icon={task.icon}
              theme={task.theme}
              stamp={task.stamp}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
  },
  headerContainer: {
    marginTop: 50,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleContainer: {
    padding: 16,
  },
  title: {
    color: colors.white,
    fontSize: 30,
  },
  searchbox: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.tint,
    borderRadius: 20,
    marginVertical: 20,
    alignItems: "center",
  },
  contentContainer: {
    padding: 20,
    flexDirection: "row",
    backgroundColor: colors.background,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
