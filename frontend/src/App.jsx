import { CryptoContextProvider } from "./context/crypro-context";
import AppLayout from "./component/layout/AppLayout";

export default function App() {
  return (
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  );
}
