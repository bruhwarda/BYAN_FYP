import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Alert,
} from "react-native";
const { width, height } = Dimensions.get("screen");
const ChooseNgo = ({ navigation }) => {
  const [pickerValue, setPickerValue] = useState("");
  const [productName, setProductName] = useState("");
  const [Description, setDescription] = useState("");

  const NameAlert = (name) =>
    Alert.alert(
      "Product Name Confirmation",
      "Is " + name + " correct product name",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () =>
            navigation.navigate("info", {
              productName: productName,
              ngo: pickerValue,
              description: Description,
            }),
        },
      ]
    );

  const submit = () => {
    if (pickerValue && productName) {
      NameAlert(productName);
    } else {
      alert("All fields are mandatory");
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Product Name</Text>
        <TextInput
          style={styles.inputStyle}
          value={productName}
          onChangeText={(Data) => setProductName(Data)}
        />
      </View>
      <Text style={styles.labels}>Select Your NGO</Text>

      <CustomPicker
        placeholder={"Choose a value"}
        value={pickerValue}
        setValue={setPickerValue}
        dropdownList={[
          {
            name: "Shahid Afridi Foundation",
            description:
              "Shahid Afridi Foundation (SAF) is a non-profit organization in Pakistan with Globally registered Chapters in USA, UK, Australia, & South Africa. Our aim is to improve the conditions of the underprivileged communities of our society in terms of Education, Healthcare Services, Access to Water, Sports Rehabilitation and Emergency Relief Response.CONTACT US{(Call:  111 000 SAF (723) info@shahidafridifoundation.org}",
          },
          {
            name: "Dar-ul-Aman",
            description:
              "The Darul Aman (Shelter Home) is an institution of Social Welfare & Bait ul Maal Department, Government of the Punjab, with the mandate to give shelter to the women victims of violence including domestic violence, physical, psychological abuse, rape cases, and vanni cases, forced marriage, emotional and economical abuse, etc. Female victims of violence having children are also provide the shelter. Most of the cases are referred by the Courts and such women are kept in the strict supervision.CONTACT US {042 37468403}",
          },
          {
            name: "Aman Foundation",
            description:
              "The Aman Foundation is a social enterprise focused on catalyzing impactful solutions in Health and Education in Pakistan through direct interventions, convening powerful partnerships and advocating on behalf of the underserved people of Pakistan.CONTACT US {+92 (21) 111-11-9123}",
          },
          {
            name: "Bilqees Sarwar Foundation",
            description:
              "The Bilqees Sarwar Foundation (BSF) is a registered non-profit organization based in Lahore, Pakistan, which provides public health and education support to the local community as well as around the world. It was established by the Sarwar family, and cooperates with NRS International, a Dubai-based disaster relief supplier with a manufacturing facility in Pakistan.CONTACT US {(423)450-0005}",
          },
          {
            name: "Agha Khan Foundation",
            description:
              "Established in 1967, the Aga Khan Foundation (AKF) brings together human, financial and technical resources to address the challenges faced by the poorest and most marginalised communities in the world. Special emphasis is placed on investing in human potential, expanding opportunity and improving the overall quality of life.CONTACT US {you can contaact on their website} ",
          },
        ]}
        setDescription={setDescription}
      />
      <TouchableOpacity style={styles.buttonStyle} onPress={() => submit()}>
        <Text style={styles.buttonText}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

const CustomPicker = ({
  placeholder,
  value,
  setValue,
  dropdownList,
  setDescription,
}) => {
  const [Visible, setVisible] = useState(false);
  return (
    <View
      style={{
        borderWidth: 1.3,
        borderColor: "#d3d3d2",
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 15,
      }}
    >
      <TouchableOpacity onPress={() => setVisible(!Visible)}>
        <Text
          style={{
            paddingHorizontal: 10,
            paddingVertical: 12,
            color: "gray",
            fontWeight: "500",
          }}
        >
          {value || placeholder}
        </Text>
      </TouchableOpacity>

      {Visible &&
        dropdownList.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              setValue(item.name);
              setDescription(item.description);
              setVisible(!Visible);
            }}
            key={index}
          >
            <Text
              style={{
                fontWeight: item == value ? "bold" : "normal",
                paddingHorizontal: 10,
                paddingVertical: 6,
                borderBottomWidth: 0.9,
                borderColor: "#ededed",
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    //flexDirection: "row",
    paddingHorizontal: width * 0.1,
  },
  buttonStyle: {
    width: width * 0.8,
    height: 45,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  pickerStyle: {
    width: 300,
    height: 45,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#7d7d7d",
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    borderRadius: 10,
    fontSize: 14,
    marginBottom: 10,
  },
  labels: {
    fontSize: 14,
    color: "#7d7d7d",
    marginTop: 10,
    marginBottom: 5,
  },
  inputContainer: {
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
});
export default ChooseNgo;
