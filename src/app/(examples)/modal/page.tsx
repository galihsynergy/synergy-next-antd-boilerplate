"use client";

import AppButton from "@/components/Reusable/AppButton";
import OSXModalWrapper from "@/components/Reusable/Modal/OSXModalWrapper";
import { useState } from "react";
import ExampleOfForm from "../form/page";

const ExampleOfPage = () => {
  const [modalState, setModalState] = useState({
    open: false,
    title: null,
    type: null,
  });
  const ModalObject = {
    modal1: <div>Modal1</div>,
    modal2: <ExampleOfForm />,
  };
  return (
    <div>
      <OSXModalWrapper
        footer={null}
        onClose={() => {
          setModalState({
            open: false,
            title: null,
            type: null,
          });
        }}
        onCancel={() => {
          setModalState({
            open: false,
            title: null,
            type: null,
          });
        }}
        open={modalState.open}
        title={modalState.title}
      >
        {ModalObject[modalState.type]}
      </OSXModalWrapper>

      <div className="flex flex-col gap-3">
        <AppButton
          onClick={() => {
            setModalState({
              open: true,
              title: "Modal 1",
              type: "modal1",
            });
          }}
        >
          Trigger Modal 1 
        </AppButton>
        <AppButton
          onClick={() => {
            setModalState({
              open: true,
              title: "Modal 2",
              type: "modal2",
            });
          }}
        >
          Trigger Modal 2 
        </AppButton>
      </div>
    </div>
  );
};

export default ExampleOfPage;
