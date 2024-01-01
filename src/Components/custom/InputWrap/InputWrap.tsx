import { TPropsInputWrap } from "@/static/types";
import CustomInput from "../CustomInput/CustomInput";

function InputWrap(props: TPropsInputWrap) {
  return (
    <div className="__input-wrap ">
      <p className="text-[12px] opacity-50 text--colors_default pl-[5px] mb-[5px]">{props.title}</p>
      <CustomInput {...props} />
    </div>
  );
}

export default InputWrap;
