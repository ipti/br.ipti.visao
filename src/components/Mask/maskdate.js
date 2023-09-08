import React from "react";
import { withMask } from "use-mask-input";


const MaskDate = React.forwardRef((props, ref) => {
    const { component: Component, inputRef, ...other } = props;

    return <input {...other} type="text"  ref={withMask('99/99/9999')} />;
});

export default MaskDate