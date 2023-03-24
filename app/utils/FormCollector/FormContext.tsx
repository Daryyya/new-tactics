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
  description: string;
}

interface IContext extends IForm {
  setForm: Dispatch<SetStateAction<IForm>>;
}

export const FormContext = createContext<IContext>({
  name: "",
  phone: "",
  description: "",
} as IContext);

const FormController: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [form, setForm] = useState<IForm>({
    name: "",
    phone: "",
    description: "",
  });
  return (
    <FormContext.Provider value={{ ...form, setForm }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormController;
