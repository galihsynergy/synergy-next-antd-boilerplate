"use client";
import { ConfigProvider, Flex, Table, TableProps } from "antd";
import clsx from "clsx";
import OSXPagination from "../Pagination/OSXPagination";
import EmptyDataTable from "./EmptyTable";
import { twMerge } from "tailwind-merge";

export interface IOSXTable extends TableProps {
  customWrapperClass?: string;
  customHeader?: React.ReactNode;
  customHeaderClass?: string;
  customBlankTitle?: string;
  customBlankDesc?: string;
  customExpandedRowClassName?: string;
}

const OSXTable = ({
  customWrapperClass,
  customHeader,
  customHeaderClass = "",
  customBlankTitle = "Oops",
  customBlankDesc = "You have no data currently",
  customExpandedRowClassName,
  ...args
}: IOSXTable) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBorderRadius: customHeader ? 0 : 12,
          },
        },
      }}
    >
      <Flex
        vertical
        align="start"
        className={clsx(
          `rounded-xl ${
            !args.bordered ? `border border-solid border-border-secondary` : ""
          } bg-bg-primary w-full overflow-hidden`,
          customWrapperClass
        )}
      >
        {customHeader && (
          <div
            className={twMerge(
              `p-4 w-full bg-bg-primary ${
                args.bordered
                  ? `border border-solid border-border-secondary rounded-t-xl border-b-0`
                  : ""
              }`,
              `${customHeaderClass}`
            )}
          >
            {customHeader}
          </div>
        )}

        <Table
          {...args}
          locale={{
            emptyText: (
              <EmptyDataTable
                title={customBlankTitle}
                description={customBlankDesc}
              />
            ),
          }}
          bordered={args?.bordered}
          className={`custom-table custom-pagination w-full ${
            args.bordered ? "border-b" : ""
          } ${customExpandedRowClassName}`}
          pagination={
            args.pagination !== false && {
              total: args?.dataSource?.length,
              showSizeChanger: false,
              hideOnSinglePage: true,
              itemRender: OSXPagination,
              position: ["bottomCenter"],
              className: args.bordered
                ? "border rounded-b-xl border-b-0"
                : "border-t",
              ...args.pagination,
            }
          }
        />
      </Flex>
    </ConfigProvider>
  );
};

export default OSXTable;
