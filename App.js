import React, { useState } from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';
import PieChart from './PieChart'

export default function App() {
    const [data, setData] = useState([
        { value: 12, color: "#2196F3" },
        { value: 12, color: "#8BC34A" },
        { value: 8, color: "#f44336" },
        { value: 4, color: "#FF9800" }
    ])

    const randomize = () => {
      setData(data.map(slice => ({
        value: Math.random() + 0.1,
        color: slice.color
      })))
    }

    return (
      <View style={styles.container}>
        <Text style={{ marginBottom: 50, fontSize: 32 }}>Pie Chart Native</Text>
        <PieChart
                  style={styles.chart}
                  strokeColor={"white"}
                  strokeWidth={4}
                  data={data}
        />
        <Button title="Press to randomize" onPress={randomize} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  chart: {
    width: 300,
    height: 300,
    marginBottom: 20
  }
});
