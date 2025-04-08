import { type FC, type MouseEvent, type Ref, useState } from 'react';
import { ModalHOC } from 'src/modules/Providers/modals/ModalHOC/ModalHOC';
import { useForkliftTranslation } from 'src/utils/i18n';

import { Dropdown, DropdownList, MenuToggle, type MenuToggleElement } from '@patternfly/react-core';
import { EllipsisVIcon } from '@patternfly/react-icons';

import type { CellProps } from '../views/list/components/CellProps';

import { PlanActionsDropdownItems } from './PlanActionsDropdownItems';

import './PlanActionsDropdown.style.css';

const PlanActionsKebabDropdown_: FC<PlanActionsDropdownProps> = ({ data, isKebab }) => {
  const { t } = useForkliftTranslation();

  // Hook for managing the open/close state of the dropdown
  const [isOpen, setIsOpen] = useState(false);

  const onToggleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const onSelect = (_event: MouseEvent | undefined, _value: string | number | undefined) => {
    setIsOpen(false);
  };

  // Returning the Dropdown component from PatternFly library
  return (
    <Dropdown
      className={isKebab ? undefined : 'forklift-dropdown'}
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      onSelect={onSelect}
      toggle={(toggleRef: Ref<MenuToggleElement>) => (
        <MenuToggle
          ref={toggleRef}
          onClick={onToggleClick}
          isExpanded={isOpen}
          variant={isKebab ? 'plain' : 'default'}
        >
          {isKebab ? <EllipsisVIcon /> : t('Actions')}
        </MenuToggle>
      )}
      shouldFocusToggleOnSelect
      popperProps={{
        position: 'right',
      }}
    >
      <DropdownList>{PlanActionsDropdownItems({ data })}</DropdownList>
    </Dropdown>
  );
};

export const PlanActionsDropdown: FC<PlanActionsDropdownProps> = (props) => (
  <ModalHOC>
    <PlanActionsKebabDropdown_ {...props} />
  </ModalHOC>
);

type PlanActionsDropdownProps = {
  isKebab?: boolean;
} & CellProps;
