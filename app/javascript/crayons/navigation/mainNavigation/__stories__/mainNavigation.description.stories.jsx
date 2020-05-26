import { h } from 'preact';

import '../../../storybook-utilities/designSystem.scss';

export default {
  title: '3_Components/Navigation/Main Navigation',
};

export const Description = () => (
  <div className="container">
    <h2>Navigation: Main nav</h2>
    <p>Used as main nav in left sidebar or dropdowns...</p>
    <p>Can contain icons.</p>
  </div>
);

Description.story = { name: 'description' };
