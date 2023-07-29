
import { ReactNode, createContext } from 'react';
import './App.css';



export const TestContext = createContext<{ id: number, name: string } | null>(null);


function Provider(props: any) {
  return <TestContext.Provider value={props.value}>{props.children}</TestContext.Provider>
}

export default Provider;
