import React from 'react';
import Button from '../../src/button';

export default {
  component: Button,
  title: 'Button',
};

export const All = () => (
  <>
    <Button size="small">Small Button</Button>
    <hr />
    <Button size="large">Large Button</Button>
  </>
);

export const Small = () => <Button size="small">Small Button</Button>;

export const Large = () => <Button size="large">Large Button</Button>;
