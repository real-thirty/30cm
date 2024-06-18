import { ConfigProvider, Divider, DividerProps, ThemeConfig } from "antd";

interface props extends DividerProps {
  token?: ThemeConfig["token"];
  components?: ThemeConfig["components"];
}

export function CustomDivider({ token, components, ...props }: props) {
  return (
    <ConfigProvider theme={{ token: token, components: components }}>
      <Divider style={{ margin: 0 }} {...props} />
    </ConfigProvider>
  );
}
