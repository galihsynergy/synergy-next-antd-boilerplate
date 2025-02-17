"use client"; // Error components must be Client Components

import AppButton from "@/components/Reusable/AppButton";
import { ArrowLeft } from "@untitled-ui/icons-react";
import { Space } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export function OSXFallbackError({
  error,
}: {
  error: Error;
  containerClass?: string;
  boxClass?: string;
  action?: ReactNode;
}) {
  const router = useRouter();

  return (
    <main className="px-5 bg-bg-primary">
      <div className="container mx-auto h-screen flex items-center justify-center relative">
        <div className="z-0 absolute top-0 left-0 flex h-full w-full items-center justify-center">
          <p className="text-[150px] lg:text-[500px] font-semibold text-utility-gray-100">
            500
          </p>
        </div>
        <div className="z-10">
          <p className="text-xl lg:text-display-xl font-semibold pb-3xl text-center">
            {error?.message ? `Something Went Wrong` : "Internal Error"}
          </p>
          <p className="lg:text-xl text-center">
            Please try to reload this page or if the issue persists, <br />{" "}
            please contact{" "}
            <a
              href="mailto:support@synergy.com.sg"
              className="text-utility-brand-700"
            >
              support@synergy.com.sg
            </a>
          </p>

          <div className="w-full flex justify-center gap-lg mt-[20px]">
            <AppButton
              btn_size="md"
              btn_type="secondary-gray"
              onClick={() => router.back()}
            >
              <Space>
                <ArrowLeft width={18} />
                Go back
              </Space>
            </AppButton>
            <Link href={"/"}>
              <AppButton btn_size="md" btn_type="primary">
                Go home
              </AppButton>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
