import { ConfigProvider } from "antd";
import Routes from './routes';

export default function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b',
          borderRadius: 2
        },

      }}
    >
      <Routes />
    </ConfigProvider>

  )
}