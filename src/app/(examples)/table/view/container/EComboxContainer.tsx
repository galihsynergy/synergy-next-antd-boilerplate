"use client";

import OSXSegmented from "@/components/Reusable/Segmented/OSXSegmented";
import InboxContainer from "./Tabs/InboxContainer";

const EcomboxContainer = () => {
  const osxItems = [
    {
      children: <InboxContainer />,
      key: "inbox",
      label: "Inbox",
    },
    {
      children: <div>test</div>,
      key: "outbox",
      label: "Outbox",
    },
  ];
  return (
    <div>
      <OSXSegmented defaultActiveKey={"inbox"} items={osxItems} />
    </div>
  );
};

export default EcomboxContainer;
