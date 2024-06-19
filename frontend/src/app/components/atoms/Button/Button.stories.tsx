// Buttonは色々な書き方を残しておく
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import Button from "./Button";

export default {
  tags: ["autodocs"],
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

/** パターン1 */
export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
};

/** パターン2 */
export const Secondary: Story = {
  render: (args) => {
    return (
      <Button className="bg-gray-500 hover:bg-gray-600" {...args}>
        Button
      </Button>
    );
  },
};

/** 大 */
export const Large: StoryFn = (args) => {
  return (
    <Button className="py-3 px-6 text-lg" {...args}>
      Button
    </Button>
  );
};

/** 小 */
export const Small = Template.bind({});
Small.args = {
  children: "Button",
  className: "py-1 px-2 text-sm",
};

/** リンク付き */
export const Anchor = Template.bind({});
Anchor.args = {
  children: "Anchor",
  href: "https://github.com/netsehq/netse",
  className: "py-1 px-2 text-sm",
};
