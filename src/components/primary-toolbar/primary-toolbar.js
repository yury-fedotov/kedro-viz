import React from 'react';
import classnames from 'classnames';
import IconButton from '../ui/icon-button';
import MenuIcon from '../icons/menu';

import './primary-toolbar.scss';

/**
 * Toolbar to house buttons that controls display options for the main panel (flowchart, etc)
 * @param {JSX} children The content to be rendered within the toolbar
 * @param {Function} onToggleSidebar Handle toggling of sidebar collapsable view
 * @param {Boolean} visible Handle display of tooltip text in relation to collapsable view
 */
export const PrimaryToolbar = ({
  children,
  onToggleSidebar,
  dataTest,
  visible = { sidebar: true },
  display = { filterBtn: false },
}) => (
  <>
    <ul className="pipeline-primary-toolbar kedro">
      <IconButton
        active={visible.sidebar}
        ariaLabel={`${visible.sidebar ? 'Hide' : 'Show'} menu`}
        className={classnames(
          'pipeline-menu-button',
          'pipeline-menu-button--menu',
          { 'pipeline-menu-button--inverse': !visible.sidebar }
        )}
        dataTest={dataTest}
        icon={MenuIcon}
        labelText={`${visible.sidebar ? 'Hide' : 'Show'} menu`}
        onClick={() => onToggleSidebar(!visible.sidebar)}
        visible={!display.filterBtn}
      />
      {children}
    </ul>
  </>
);

export default PrimaryToolbar;
