import FormControl from '@mui/material/FormControl';
import * as React from 'react';
import ReactSelect from 'react-select';
import { Column } from '../../styles/style';

const SelectUi = ({ value, handleChange, label, options, name, getOptionValue, getOptionLabel, disabled }) => {


    const customStyles = {
        control: base => ({
            ...base,
            height: "56px",
            minHeight: "56px",
            width: "100%",
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            display: 'flex', flexDirection: 'row', justifyContent: "start"
        }),
        menu: base => ({
            ...base,
            width: '100%',
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        })
    };


    return (
        <div style={{ width: "100%" }}>
            <FormControl
                component="fieldset"
                style={{ width: "100%" }}
            >
                <Column>
                    <ReactSelect
                        styles={customStyles}
                        className="basic-single"
                        name={name}
                        classNamePrefix="select"
                        defaultValue={value}
                        placeholder={label}
                        options={options}
                        isLoading={!options}
                        onChange={handleChange}
                        getOptionValue={getOptionValue}
                        getOptionLabel={getOptionLabel}
                        isDisabled={disabled}
                    />
                </Column>
            </FormControl>
        </div>
    );
}

export default SelectUi;