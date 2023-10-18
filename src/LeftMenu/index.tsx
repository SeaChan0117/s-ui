import React, { memo, useCallback } from "react";
import configs from './config';
import { classname } from "../utils";

interface LeftMenuProps {
  activeMenu: string;
  setActiveMenu: Function;
}

const LeftMenu = memo((props: LeftMenuProps) => {
  const { activeMenu, setActiveMenu } = props;

  const menuClick = useCallback((e: any) => {
    const key = e?.target?.dataset?.type;
    setActiveMenu(key);
  }, [setActiveMenu]);

  return (  
    <ul className='left-menus'>
      {
        configs?.map(key => (
          <li
            className={classname('component-item', { active: activeMenu === key })}
            key={key}
            data-type={key}
            onClick={menuClick}
          >
            {key}
          </li>
        ))
      }
    </ul>
  )
});

export default LeftMenu;