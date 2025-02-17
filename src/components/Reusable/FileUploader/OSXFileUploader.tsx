"use client";

import {
  Avatar,
  Flex,
  FormInstance,
  Typography,
  Upload,
  UploadProps,
} from "antd";
const { Dragger } = Upload;
import uploadIcon from "@/assets/icons/upload.png";
import { default as NextImage } from "next/image";

import { Upload01, UploadCloud02 } from "@untitled-ui/icons-react";
import ImgCrop from "antd-img-crop";
import { RcFile } from "antd/es/upload";
import React, { useState } from "react";
import OSXFile from "@/components/Reusable/FileUploader/OSXFile";
import AppButton from "@/components/Reusable/AppButton";
import OSXFileCompact from "@/components/Reusable/FileUploader/OSXFileCompact";
import { FileType, Helper } from "@/lib/helper";
import { UploadFile } from "antd/lib";
import toast from "react-hot-toast";
import "./index.css";

interface FileUploaderI {
  form: FormInstance<any>;
  formName: string;
  className?: string;
  uploadProps?: UploadProps;
  uploadOnChange?: (file: File[], fileList: any) => Promise<any>;
  onRemove?: (id: string, fileList: any) => any;
  hint?: string;
  type?: "file-uploader" | "image-crop";
  overrideProgress?: boolean;
  customTextClick?: string;
  variant?: "full" | "compact" | "embed";
  removeOnUpload?: boolean;
  avatarChildren?: React.ReactNode;
  maxSize?: number;
}

/**
 * OSXFileUploader Component
 *
 * A customizable file uploader component with support for different variants:
 * - `full`: A full-featured drag-and-drop file uploader.
 * - `compact`: A compact file uploader with a button for file selection.
 * - `embed`: An avatar uploader for images, typically used for profile pictures.
 *
 * @param {FileUploaderI} props - The component props.
 * @returns {React.ReactElement} The rendered file uploader component.
 */
const OSXFileUploader = ({
  form,
  formName,
  className,
  customTextClick = "Click to upload",
  uploadProps = { maxCount: 2 },
  uploadOnChange,
  overrideProgress = true,
  onRemove,
  hint = "SVG, PNG, JPG or GIF (max. 800x400px)",
  type = "file-uploader",
  variant = "full",
  removeOnUpload = false,
  avatarChildren,
  maxSize = 10, //in MB
}: FileUploaderI) => {
  const [loading, setLoading] = useState(false);
  const [base64, setBase64] = useState<string | null>(null);
  const fileList = form.getFieldValue(formName) ?? [];

  const onBeforeUpload = async (file: RcFile) => {
    const prevValues = await form.getFieldsValue();

    //check file list to max count
    if (uploadProps.maxCount > 1 && fileList.length >= uploadProps.maxCount) {
      return false;
    }
    const fileSizeinMB = file.size / 1024 / 1024;

    if (fileSizeinMB > maxSize) {
      toast.error(`File size is too large, max ${maxSize}MB`);
      return false;
    }

    const payload = prevValues[formName]
      ? uploadProps.maxCount > 1
        ? [...prevValues[formName], file]
        : [file]
      : [file];

    if (variant === "embed") {
      const base64 = await Helper.getBase64(file);
      setBase64(base64);
    }

    if (uploadOnChange) {
      if (overrideProgress) {
        setLoading(true);

        try {
          await Promise.all([
            uploadOnChange([file], form.getFieldValue(formName)),
          ]);

          form.setFieldValue(formName, payload);
        } catch {
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(true);
        if (uploadProps.maxCount === 1) {
          form.setFieldValue(formName, null);
        }
        try {
          await uploadOnChange([file], form.setFieldValue(formName, payload));
        } finally {
          setLoading(false);
        }
      }
    } else {
      // this for non upload onChange
      form.setFieldsValue({ ...prevValues, [formName]: payload });
    }

    return false;
  };

  const handleRemoveFile = async (uid: string) => {
    const prevValues = await form.getFieldsValue();
    const payload = fileList.filter((data) => data.uid !== uid);
    form.setFieldsValue({ ...prevValues, [formName]: payload });
    if (onRemove) {
      onRemove(uid, form.getFieldValue(formName));
    }
  };

  const props: UploadProps = {
    name: "file",
    multiple: false,
    beforeUpload: async (file) => {
      onBeforeUpload(file);
      return false;
    },
    showUploadList: false,
    ...uploadProps,
  };

  /**
   * DraggerComponent
   *
   * Renders the appropriate uploader UI based on the `variant` prop:
   * - `full`: A drag-and-drop area with a cloud icon and descriptive text.
   * - `compact`: A button for file selection with a hint text below.
   * - `embed`: An avatar uploader for images, typically used for profile pictures.
   *
   * @returns {React.ReactElement} The rendered uploader component.
   */
  const DraggerComponent = () => {
    switch (variant) {
      case "full":
        return (
          <Dragger {...props} className="file-uploader">
            <div className={`${className} p-3 mb-4`}>
              <Flex
                align="center"
                justify="center"
                className="w-10 mx-auto mb-3 h-10 p-2.5 rounded-md border border-solid border-border-secondary shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]"
              >
                <UploadCloud02 width={20} height={20} />
              </Flex>
              <Typography.Paragraph className="!mb-0 text-text-tertiary text-sm font-normal">
                <Typography.Text className="text-utility-brand-700 text-sm font-semibold ant-upload-text">
                  {customTextClick}
                </Typography.Text>{" "}
                or drag and drop
              </Typography.Paragraph>
              <Typography.Paragraph className="!mb-0 text-text-tertiary font-normal text-xs text-center self-stretch ant-upload-hint">
                {hint}
              </Typography.Paragraph>
            </div>
          </Dragger>
        );
      case "compact":
        return (
          <Dragger {...props} className="compact-file-uploader">
            <div>
              <AppButton btn_type="secondary-gray" btn_size="sm">
                <Upload01 width={18} />
                Upload File
              </AppButton>
              <Typography.Paragraph className="!mb-0 text-text-tertiary font-normal text-xs self-stretch ant-upload-hint mt-1">
                {hint}
              </Typography.Paragraph>
            </div>
          </Dragger>
        );
      case "embed":
        return (
          <Upload
            name="avatar"
            listType="picture-circle"
            className="avatar-uploader !overflow-hidden"
            showUploadList={false}
            {...props}
          >
            {fileList.length > 0 ? (
              <Avatar size={96} src={base64} shape="circle" />
            ) : (
              avatarChildren
            )}
          </Upload>
        );
      default:
        return null;
    }
  };

  /**
   * FileListComponent
   *
   * Renders the list of uploaded files based on the `variant` prop:
   * - `full` and `compact`: Displays the uploaded files with a delete option.
   * - `embed`: Does not render the file list (used for avatar uploads).
   *
   * @returns {React.ReactElement} The rendered file list component.
   */
  const FileListComponent = () => {
    if (variant === "embed") return null;

    return (
      <>
        {fileList.map((data, idx) => (
          <div key={idx}>
            {variant === "compact" ? (
              <OSXFileCompact
                type="delete"
                onAction={handleRemoveFile}
                fileName={data.name}
                uid={data.uid}
                className="mt-2"
              />
            ) : (
              <OSXFile
                onAction={handleRemoveFile}
                type="delete"
                fileName={data.name}
                size={data.size ?? 25}
                uid={data.uid}
                className="mt-2"
              />
            )}
          </div>
        ))}
      </>
    );
  };

  /**
   * LoadingComponent
   *
   * Renders a loading state for file uploads based on the `variant` prop:
   * - `full` and `compact`: Displays a loading indicator.
   * - `embed`: Does not render the loading state.
   *
   * @returns {React.ReactElement} The rendered loading component.
   */
  const LoadingComponent = () => {
    if (!loading || variant === "embed") return null;

    return variant === "compact" ? (
      <OSXFileCompact
        onAction={null}
        type="download"
        fileName="Uploading.."
        uid={null}
      />
    ) : (
      <OSXFile
        onAction={null}
        type="download"
        fileName="Uploading.."
        size={0}
        outsideLoading={loading}
      />
    );
  };

  if (type === "image-crop") {
    return (
      <ImageUploaderCrop
        onBeforeUpload={onBeforeUpload}
        fileList={fileList}
        onRemoveFile={handleRemoveFile}
      />
    );
  }

  return (
    <div>
      {(!removeOnUpload || fileList.length === 0) && <DraggerComponent />}
      <FileListComponent />
      <LoadingComponent />
    </div>
  );
};

export default OSXFileUploader;

interface IImageUploaderCrop {
  onBeforeUpload: (file: RcFile) => Promise<boolean>;
  fileList: any;
  onRemoveFile: (uid: string) => Promise<void>;
}

/**
 * ImageUploaderCrop Component
 *
 * A specialized uploader for cropping images, typically used for avatar uploads.
 *
 * @param {IImageUploaderCrop} props - The component props.
 * @returns {React.ReactElement} The rendered image uploader component.
 */
function ImageUploaderCrop({
  onBeforeUpload,
  fileList,
  onRemoveFile,
}: IImageUploaderCrop) {
  async function handlePreviewImage(file: UploadFile) {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  }

  return (
    <div>
      <ImgCrop>
        <Upload
          onPreview={handlePreviewImage}
          itemRender={(originNode) => {
            return originNode;
          }}
          listType="picture-card"
          multiple={false}
          className="image-uploader"
          customRequest={(options) => {
            options.onSuccess("Ok");
          }}
          beforeUpload={async (file) => {
            await onBeforeUpload(file);
          }}
          maxCount={1}
          onRemove={(file) => onRemoveFile(file.uid)}
        >
          {fileList.length === 0 && (
            <div>
              <p className="ant-upload-drag-icon flex justify-center">
                <NextImage src={uploadIcon} alt="upload" />
              </p>
              <p className="ant-upload-text">
                <span className="font-semibold text-text-brand-secondary">
                  Click to upload
                </span>{" "}
                or drag and drop
              </p>
            </div>
          )}
        </Upload>
      </ImgCrop>
    </div>
  );
}
