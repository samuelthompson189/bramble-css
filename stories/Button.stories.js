import React from 'react';

const Button = ({ children, ...props}) => <button {...props}>{children}</button>

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};


export const Primary = () => <Button className="btn btn-primary">Primary Button</Button>
export const Secondary = () => <Button className="btn btn-secondary">Secondary Button</Button>
