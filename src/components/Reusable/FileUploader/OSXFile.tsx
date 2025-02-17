import { Helper } from "@/lib/helper";
import FileImage from "@/components/Reusable/FileUploader/FileImage";
import { useState } from "react";
import AppButton from "@/components/Reusable/AppButton";
import clsx from "clsx";
import { Download01, Trash03 } from "@untitled-ui/icons-react";

export interface OSXFileProps {
  onAction: any;
  type: "download" | "delete";
  fileName: string | React.ReactNode;
  size?: number;
  uid?: string;
  onDownloadWhileClick?: () => Promise<any>;
  fileType?: string;
  withFileSize?: boolean;
  outsideLoading?: boolean;
  className?: string;
}
const OSXFile = ({
  onAction,
  type,
  fileName,
  size,
  uid,
  onDownloadWhileClick,
  fileType,
  withFileSize,
  outsideLoading,
  className,
}: OSXFileProps) => {
  const [fileLoading, setFileLoading] = useState(
    outsideLoading ? outsideLoading : false
  );

  const onClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFileLoading(true);
    if (onDownloadWhileClick && type === "delete") {
      await onDownloadWhileClick();
    }
    setFileLoading(false);
  };

  const onDownloadOrDelete = async () => {
    if (type === "delete") {
      return onAction(uid);
    } else {
      setFileLoading(true);
      await onAction();
      setFileLoading(false);
    }
  };

  return (
    <div
      onClick={onClick}
      className={clsx(
        "flex justify-between items-center rounded-xl border-gray border p-4",
        className,
        onDownloadWhileClick
          ? "cursor-pointer hover:border-utility-blue-500"
          : ""
      )}
    >
      <div className="flex items-center gap-3">
        <div className="w-10">
          <FileImage
            type={
              fileType
                ? fileType
                : typeof fileName === "string"
                ? fileName?.split(".").pop()
                : ""
            }
          />
        </div>
        <p className="text-text-primary font-medium text-sm line-clamp-1 mr-3">
          {fileName}
        </p>
        {withFileSize && (
          <p className="text-text-secondary font-medium text-sm">
            {Helper.convertFileSize(size)}
          </p>
        )}
      </div>
      <AppButton
        btn_type="secondary-gray"
        btn_size="sm"
        loading={fileLoading}
        htmlType="button"
        onClick={onDownloadOrDelete}
        iconOnly
        icon={
          !fileLoading &&
          (type === "download" ? (
            <Download01 width={20} height={20} />
          ) : (
            <Trash03 width={20} height={20} />
          ))
        }
      />
    </div>
  );
};

export default OSXFile;
