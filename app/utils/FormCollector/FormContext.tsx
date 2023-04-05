import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

interface IForm {
  name: string;
  phone: string;
}

interface IContext extends IForm {
  setForm: Dispatch<SetStateAction<IForm>>;
}

export const FormContext = createContext<IContext>({
  name: "",
  phone: "",
} as IContext);

const FormController: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [form, setForm] = useState<IForm>({
    name: "",
    phone: "",
  });
  return (
    <FormContext.Provider value={{ ...form, setForm }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormController;
