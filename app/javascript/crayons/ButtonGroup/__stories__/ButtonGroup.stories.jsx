import { h } from 'preact';
import { Button, ButtonGroup } from '@crayons';

import '../../storybook-utilities/designSystem.scss';

export default {
  title: '3_Components/ButtonGroup',
};

export const Default = () => {
  return (
    <ButtonGroup>
      <Button variant="outlined">Action 1</Button>
      <Button variant="outlined">Action 2</Button>
    </ButtonGroup>
  );
};

Default.story = {
  name: 'Text buttons',
};

export const TextIcon = () => {
  const Icon = () => (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      className="crayons-icon"
    >
      <path d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z" />
    </svg>
  );

  return (
    <ButtonGroup>
      <Button variant="secondary">Action 1</Button>
      <Button variant="secondary" icon={Icon} contentType="icon" />
    </ButtonGroup>
  );
};

TextIcon.story = {
  name: 'Text button + Icon',
};
