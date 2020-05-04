import {Select} from "antd";
import React from "react";
const Option = Select.Option;
const SelectComponent = ({name , options , defaultValue ,width , onChange})=>{

    const style = {
        margin : "0 2 0 2",
        borderRadius : "0",
        border : "none",
        width : `${width}px`
    }
    return <Select name = {name} defaultValue = {defaultValue} style = {style} onChange = {onChange}>
        {options.map(item=>(
            <Option value = {item.value}>{item.name}</Option>
        ))}
    </Select>
}

export default SelectComponent;