import AppButton from "@/components/Reusable/AppButton";
import OSXBadge from "@/components/Reusable/Badge/OSXBadge";
import OSXDropdownButton from "@/components/Reusable/Dropdown/OSXDropdownButton";
import { OSXInputSearch } from "@/components/Reusable/Input/OSXInput";
import OSXTable from "@/components/Reusable/Table/OSXTable";
import { ChevronDown, Download02, FileCheck02 } from "@untitled-ui/icons-react";
import { Form, Space, TableColumnsType } from "antd";
import dayjs from "dayjs";

const data = [
  {
    fileName: "File Name 1",
    fromWho: "From Who 1",
    date: "22-05-2002",
    status: "Pending",
  },
  {
    fileName: "File Name 2",
    fromWho: "From Who 2",
    date: "22-05-2002",
    status: "Pending",
  },
  {
    fileName: "File Name 3",
    fromWho: "From Who 3",
    date: "22-05-2002",
    status: "Pending",
  },
  {
    fileName: "File Name 4",
    fromWho: "From Who 4",
    date: "22-05-2002",
    status: "Pending",
  },
  {
    fileName: "File Name 5",
    fromWho: "From Who 5",
    date: "22-05-2002",
    status: "Pending",
  },
  {
    fileName: "File Name 6",
    fromWho: "From Who 6",
    date: "22-05-2002",
    status: "Pending",
  },
  {
    fileName: "File Name 7",
    fromWho: "From Who 7",
    date: "22-05-2002",
    status: "Pending",
  },
  {
    fileName: "File Name 8",
    fromWho: "From Who 8",
    date: "22-05-2002",
    status: "Pending",
  },
  {
    fileName: "File Name 9",
    fromWho: "From Who 9",
    date: "22-05-2002",
    status: "Pending",
  },
  {
    fileName: "File Name 10",
    fromWho: "From Who 10",
    date: "22-05-2002",
    status: "Pending",
  },
  {
    fileName: "File Name 11",
    fromWho: "From Who 11",
    date: "22-05-2002",
    status: "Pending",
  },
];

const InboxContainer = () => {
  const columns: TableColumnsType<unknown> = [
    {
      title: "File Name",
      dataIndex: "fileName",
      key: "fileName",
    },
    {
      title: "From Who",
      dataIndex: "fromWho",
      key: "fromWho",
    },
    {
      title: "To Who",
      dataIndex: "toWho",
      key: "toWho",
    },
    {
      title: "For Who",
      dataIndex: "forWho",
      key: "forWho",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        if (status === "Pending") {
          return <OSXBadge type="yellow">{status}</OSXBadge>;
        }

        if (status === "Completed") {
          return <OSXBadge type="green">{status}</OSXBadge>;
        }

        if (status === "Return") {
          return <OSXBadge type="red">{status}</OSXBadge>;
        }
      },
    },
    {
      title: "Transfer Type",
      dataIndex: "transferType",
      key: "transferType",
    },
    {
      title: "Transfer Date",
      dataIndex: "transferDate",
      key: "transferDate",
      render: (data) => (data ? dayjs(data).format("D MMM YYYY") : "-"),
    },
    {
      title: "",
      key: "action",
      render: () => (
        <OSXDropdownButton
          menu={{
            items: [
              {
                label: (
                  <div
                    onClick={() => {}}
                    className="flex items-center gap-[5px] text-text-secondary font-[500] text-sm"
                  >
                    <FileCheck02 width={16} height={16} />
                    Take Action
                  </div>
                ),
                key: "detail",
              },
              {
                label: (
                  <div className="flex items-center gap-[5px] text-text-secondary font-[500] text-sm">
                    <Download02 width={16} height={16} />
                    Download File
                  </div>
                ),
                key: "edit",
              },
            ],
          }}
        />
      ),
      fixed: "right",
      width: 100,
    },
  ];

  const CustomInboxHeader = () => {
    return (
      <div className="flex justify-between">
        <div className="flex gap-[12px]">
          <Form onFinish={() => ({})}>
            <Form.Item noStyle name={"search"}>
              <OSXInputSearch
                customSize="md"
                shadow={false}
                placeholder="Search 412 files"
                customClassName="max-w-[300px]"
              />
            </Form.Item>
          </Form>
          <AppButton btn_type="secondary-gray" className="max-h-[44px]">
            <Space>
              {/* TODO: Un-comment */}
              {/* {Number(totalActiveFilter) > 0 && (
                <div className='flex items-center justify-center mr-1 h-5 w-5 rounded-full bg-utility-brand-600'>
                  <p className='text-sm font-normal text-white'>
                    {totalActiveFilter}
                  </p>
                </div>
              )} */}
              Filter
              <ChevronDown width={18} />
            </Space>
          </AppButton>
        </div>
        <OSXDropdownButton
          iconButton={null}
          btnType="primary"
          buttonProps={{
            btn_size: "lg",
          }}
          menu={{
            items: [
              {
                label: "Regular Upload",
                key: "1",
                onClick: () => ({}),
              },
              {
                label: "NAS Upload",
                key: "2",
                onClick: () => ({}),
              },
            ],
          }}
          buttonChildren="Create New Transfer"
        />
      </div>
    );
  };
  return (
    <div>
      <OSXTable
        rowKey={(record) => record.fileName}
        loading={false}
        scroll={{ x: 1500 }}
        pagination={{
          pageSize: 10,
          // total: data?.totalCount,
          // current: query.page,
          // onChange: (page) => {
          //   setQuery((prev) => ({ ...prev, page }));
          // },
          hideOnSinglePage: false,
        }}
        customHeader={<CustomInboxHeader />}
        dataSource={data ? data : []}
        columns={columns}
      />
    </div>
  );
};

export default InboxContainer;
