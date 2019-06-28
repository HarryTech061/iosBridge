import React from "react";
import {
  StyleSheet,
  requireNativeComponent,
  processColor
} from "react-native";

const NativePieChart = requireNativeComponent("PieChart", PieChart);
function PieChart(props) {
    const { style, data, ...rest } = props;
    const processedData = data.map(item => ({ value: item.value,
        color: processColor(item.color)
    }));
    return (
        <NativePieChart
            {...rest}
            style={[styles.container, style]}
            data={processedData}
        />
    )
}

const styles = StyleSheet.create({ 
    container: {
        backgroundColor: "transparent"
    }
});

PieChart.defaultProps = { 
    data: [],
    strokeWidth: 0, 
    strokeColor: "transparent"
};
export default PieChart