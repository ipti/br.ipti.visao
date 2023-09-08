import React from "react";
import { withMask } from "use-mask-input";


const MaskCep = React.forwardRef((props, ref) => {
    const { component: Component, inputRef, ...other } = props;

    return <input {...other} type="text"  ref={withMask('99999-999')} />;
});

export default MaskCep