import React from "react";
import { withMask } from "use-mask-input";


const MyInputComponent = React.forwardRef((props, ref) => {
    const { component: Component, inputRef, ...other } = props;

    return <input {...other} type="text"  ref={withMask('999.999.999-99')} />;
});

export default MyInputComponent