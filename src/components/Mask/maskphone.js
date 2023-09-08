import React from "react";
import { withMask } from "use-mask-input";


const MaskPhone = React.forwardRef((props, ref) => {
    const { component: Component, inputRef, ...other } = props;

    return <input {...other} type="text"  ref={withMask('(99) 9 9999-9999')} />;
});

export default MaskPhone