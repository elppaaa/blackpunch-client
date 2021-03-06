import  {useMemo} from 'react';
import {createPortal} from 'react-dom'


type Props = {
  children: React.ReactNode;
  elementId: string;
}

const Portal = ({children, elementId}: Props) => {
  const rootElement  = useMemo(() => document.getElementById(elementId), [
    elementId
  ]) ;
  return createPortal(children, rootElement!);
}

export default Portal;
