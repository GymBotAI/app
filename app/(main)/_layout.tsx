import { Slot, Tabs } from "expo-router";

export default function Layout() {
  return (
    <>
      <Slot />
      <Tabs />
    </>
  );
}
