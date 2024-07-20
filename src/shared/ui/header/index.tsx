import { Flex, Layout, Menu, MenuProps, Typography } from "antd";

const { Header: AntdHeader } = Layout;

type MenuItem = Required<MenuProps>["items"][number];
const items: MenuItem[] = [
  {
    label: "Navigation One",
    key: "mail",
  },
  {
    label: "Navigation Three - Submenu",
    key: "SubMenu",
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          { label: "Option 1", key: "setting:1" },
          { label: "Option 2", key: "setting:2" },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          { label: "Option 3", key: "setting:3" },
          { label: "Option 4", key: "setting:4" },
        ],
      },
    ],
  },
  {
    key: "alipay",
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
  },
];

export const Header = () => {
  return (
    <AntdHeader
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        background: "white",
        flexDirection: "column",
      }}
    >
      <Flex
        justify="space-between"
        style={{
          width: "100%",
        }}
      >
        <Typography.Text>logo</Typography.Text>
        <Flex>
          <Typography.Text>my page</Typography.Text>
          <Typography.Text>my like</Typography.Text>
          <Typography.Text>shopping bag</Typography.Text>
          <Typography.Text>logout</Typography.Text>
        </Flex>
      </Flex>
      <Menu
        mode="horizontal"
        items={items}
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      />
    </AntdHeader>
  );
};
