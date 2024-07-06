import Form, { RuleObject } from "antd/es/form";
import { useCallback, useEffect, useState } from "react";





export const usePwValidate = () => {
  const [canNext, setCanNext] = useState(false)
  const form = Form.useFormInstance();

  const values = Form.useWatch(({ PASSWORD, CONFIRMPASSWORD }) => {
    return [PASSWORD, CONFIRMPASSWORD];
  }, form);

  useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setCanNext(true))
      .catch(() => setCanNext(false));
  }, [values, setCanNext]);


  const pwLenValidate = useCallback(
    (_: RuleObject, value: string): Promise<void> => {
      
      if (value.length >= 8 && value.length <= 20) {
        return Promise.resolve();
      }
      return Promise.reject(
        new Error("비밀번호는 8~20자 이내로 작성해주세요.")
      );
    },
    [setCanNext]
  );

  const pwIncludeNumValidate = useCallback((_:RuleObject, value:string)=>{
    if(new RegExp("^(?=.*[0-9]).*$").test(value)){

      return Promise.resolve()
    }
    return Promise.reject(new Error("숫자가 포함되어야합니다."))
  }, [setCanNext])


  const pwIncludeSpecialValidate = useCallback((_:RuleObject, value:string)=>{
    if(new RegExp(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g).test(value)){

      return Promise.resolve()
    }
    return Promise.reject(new Error("특수문자가 포함되어야합니다."))
  }, [])


  const pwIncludeUpperLowerEngValidate = useCallback((_:RuleObject, value:string)=>{
    if(new RegExp(`^(?=.*[a-z])(?=.*[A-Z]).*$`).test(value)){

      return Promise.resolve()
    }
    return Promise.reject(new Error("영어 대소문자가 포함되어야합니다."))
  }, [])

  const confimrPwValidate = useCallback((_:RuleObject, value:string)=>{

    if(!!value && form.getFieldValue('PASSWORD') === value) {
      return Promise.resolve();
    }

    return Promise.reject(new Error("비밀번호와 일치하지 않습니다."));
  }, [form])

  return {pwLenValidate, 
    canNext, pwIncludeNumValidate, confimrPwValidate ,pwIncludeSpecialValidate, pwIncludeUpperLowerEngValidate }
}

