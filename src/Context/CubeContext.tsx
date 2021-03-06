import React from "react";
import { counter } from '../statics'
export const Store = React.createContext<any>({});

interface IAction {
  type: string;
  payload: any;
}

export type HintType = {
  title: string;
  isActive: boolean | null;
  value: string;
};
type PressButton = {
  counter: number;
  isTyping: boolean;
};
interface IinitialState {
  typing: PressButton;
  signup: [HintType, HintType, HintType];
  login: [HintType, HintType];
  forgetPassword: [HintType]
}

const initialState: IinitialState = {
  typing: {
    counter: 0,
    isTyping: false,
  },
  signup: [
    {
      title: "Email Address",
      isActive: null,
      value: "",
    },
    {
      title: "Password",
      isActive: null,
      value: "",
    },
    {
      title: "Confirm Password",
      isActive: null,
      value: "",
    },
  ],
  login: [
    {
      title: "Email Address",
      isActive: null,
      value: "",
    },
    {
      title: "Password",
      isActive: null,
      value: "",
    },
  ],
  forgetPassword: [
    {
      title: "Email Address",
      isActive: null,
      value: ""
    }
  ]
};

const reducer = (state: IinitialState, action: IAction): IinitialState => {
  

  const newState = { ...state };
  if (action.type === "TOGGLE_SIGNUP_ITEM_FOCUS")
    newState.signup[action.payload].isActive = !newState.signup[action.payload].isActive;
  else if (action.type === "UPDATE_SIGNUP_INPUT_VALUE")
    newState.signup[action.payload.index].value = action.payload.value;
  else if (action.type === "TOGGLE_LOGIN_ITEM_FOCUS")
    newState.login[action.payload].isActive = !newState.login[action.payload].isActive;
  else if (action.type === "UPDATE_LOGIN_INPUT_VALUE")
    newState.login[action.payload.index].value = action.payload.value;
    else if (action.type === "TOGGLE_FORGET_PASSWORD_ITEM_FOCUS")
    newState.forgetPassword[action.payload].isActive = !newState.forgetPassword[action.payload].isActive;
  else if (action.type === "UPDATE_FORGET_PASSWORD_INPUT_VALUE")
    newState.forgetPassword[action.payload.index].value = action.payload.value;
  else if (action.type === "UPDATE_COUNTER") newState.typing.counter += 10;
  else if (action.type === "RESET_COUNTER") newState.typing.counter = 0;
  else if (action.type === "TOGGLE_IS_TYPING")
    newState.typing.isTyping = action.payload;
  return newState;
};

export enum FormType {
  Signup = "SIGNUP",  
  Login = "LOGIN",
  ForgetPassword = "FORGET_PASSWORD"
}

const CubeContextProvider: React.FC = (props: any) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const toggleFocus = (index: number, formName: FormType) => {
    const action = {
      type: `TOGGLE_${formName}_ITEM_FOCUS`,
      payload: index,
    };
    dispatch(action);
  };

  const updateInput = (index: number, value: string, formName: FormType) => {
    const action = {
      type: `UPDATE_${formName}_INPUT_VALUE`,
      payload: {
        index,
        value,
      },
    };
    
    dispatch(action);
    counter.value = 0 
  };

  return (
    <Store.Provider value={{ state, dispatch, toggleFocus, updateInput }}>
      {props.children}
    </Store.Provider>
  );
};

export default CubeContextProvider;
