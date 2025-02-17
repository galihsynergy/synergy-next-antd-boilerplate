import { CascaderProps, GetProp, UploadFile, UploadProps } from "antd";
import type { PhoneNumber } from "antd-phone-input";
import { DefaultOptionType } from "antd/es/cascader";
import dayjs from "dayjs";
import DOMPurify from "dompurify";
import React from "react";
// import utc dayjs
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

import { Rule } from "antd/es/form";

const sanitizeHTMLContent = (htmlContent: string): string => {
  return DOMPurify.sanitize(htmlContent, {
    FORBID_TAGS: ["marquee"],
  });
};

function getInitials(name = "") {
  let parts = name?.split(" ");
  if (parts?.length > 2) {
    parts = parts?.slice(0, 2);
  }
  let initials = "";
  for (let i = 0; i < parts?.length; i++) {
    if (parts[i]?.length > 0 && parts[i] !== "") {
      initials += parts[i][0]; // shorthand from initials = initials + parts[i][0]
    }
  }
  return initials.toUpperCase() ?? "";
}

function formateDateToString(date: Date, dateFormat = "DD/MM/YYYY") {
  return dayjs(date).format(dateFormat);
}

function convertFileSize(sizeInBytes) {
  // Define the suffixes for different file sizes
  const suffixes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  // Determine the appropriate file size suffix
  let suffixIndex = 0;
  while (sizeInBytes >= 1024 && suffixIndex < suffixes.length - 1) {
    sizeInBytes /= 1024.0;
    suffixIndex += 1;
  }

  // Format the result with two decimal places
  return `${sizeInBytes.toFixed(2)} ${suffixes[suffixIndex]}`;
}
function formatToSGCurrency(num: number, decimal: number = 0) {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: decimal,
    maximumFractionDigits: decimal,
  }).format(num);
}

function formatNumber(num: number, decimal: number = 0) {
  return Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimal,
    maximumFractionDigits: decimal,
  }).format(num === 0 ? Math.abs(num) : num);
}

function formatter2Commas(value: number | string) {
  if (value == 0 || value === "" || value === null || value === undefined) {
    return "0";
  }
  if (typeof value === "string") {
    return parseFloat(value)
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  if (typeof value === "number") {
    return value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return value;
}

function formatter3Digits(value: number) {
  return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatThousands(value: number) {
  return value
    .toString()
    .split(".")[0]
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function parserComma(value: string) {
  return Number(value?.replace(/\$\s?|(,*)/g, ""));
}

function getOrdinal(n: number) {
  const remainder10 = n % 10;
  const remainder100 = n % 100;

  if (remainder10 === 1 && remainder100 !== 11) {
    return n + "st";
  } else if (remainder10 === 2 && remainder100 !== 12) {
    return n + "nd";
  } else if (remainder10 === 3 && remainder100 !== 13) {
    return n + "rd";
  } else {
    return n + "th";
  }
}

function getAge(dateString: string): number {
  if (dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  return null;
}
async function delay(number: number) {
  await new Promise((resolve) => setTimeout(resolve, number ?? 1000));
}

/**
 * Formats a given value into a string with a maximum of 7 decimal places
 * using 'en-US' locale formatting.
 *
 * @param val - The value to be formatted, which can be any type.
 * @returns The formatted string representation of the numeric value.
 * @example
 * const formattedValue = formatterNumber('123456'); // '123,456'
 * const formattedValue = formatterNumber('123456000'); // '123,456,000'
 * const formattedValue = formatterNumber('123456.123456'); // '123,456.123456'
 */
const formatterNumber = (val): string => {
  // keep old code, just in case the new code have bugs
  // if (!val) return'0'
  // return val.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Convert the input value to a number
  const numericValue = Number(val);

  // Create a new number formatter for 'en-US' locale
  // Set maximumFractionDigits to 7, which determines the maximum number of decimal places
  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 7,
  });

  // Format the numeric value using the formatter
  const result = formatter.format(numericValue);

  // Return the formatted result as a string
  return result;
};

/**
 * Parses a string value by removing commas,
 * returning the cleaned numeric string.
 *
 * @param val - The string value to be parsed.
 * @returns The parsed numeric string without currency symbols and commas.
 * @example
 * const parsedValue = parserNumber('123,456'); // '123456'
 * const parsedValue = parserNumber('123,456,000'); // '123456000'
 * const parsedValue = parserNumber('123,456.123456'); // '123456.123456'
 */
const parserNumber = (val) => {
  // keep old code, just in case the new code have bugs
  // if (!val) return val;
  // return val.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const result = val.replace(/\$\s?|(,*)/g, "");
  return result;
};

function onlyAllowNumber(event: any) {
  if (!/[0-9]/.test(event.key)) {
    event.preventDefault();
  }
}

const getFNALabelColor = (label: string) => {
  if (label == "Selected Client") {
    return "red";
  } else {
    return undefined;
  }
};

const getFNAStatusColor = (status: string) => {
  if (status?.toLocaleLowerCase().includes("return")) {
    return "orange";
  } else if (status?.toLocaleLowerCase().includes("approved")) {
    return "green";
  } else if (status?.toLocaleLowerCase() === "pending adviser action") {
    return "orange";
  } else {
    return "gray";
  }
};

function formatDateTime(dateTimeString: string) {
  const date = dayjs(dateTimeString);
  return date.format("D MMM YYYY h:mm A");
}

function formatDateOnly(dateTimeString: string) {
  const date = dayjs(dateTimeString);
  return date.format("D MMM YYYY");
}

function formatTimeOnly(dateTimeString: string) {
  const date = dayjs(dateTimeString);
  return date.format("h:mm A");
}

function formatMonthOnly(dateTimeString: string) {
  const date = dayjs(dateTimeString);
  return date.format("MMM YYYY");
}

function formatToLocalDateTime(dateTimeString: string) {
  const date = dayjs(dateTimeString);
  return date.utc(true).local().format("D MMM YYYY h:mm A");
}

function formatToLocalTimeOnly(dateTimeString: string) {
  const date = dayjs(dateTimeString);
  return date.utc(true).local().format("h:mm A");
}

const debounce = (func, delay) => {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

function useDebounce(callback, delay) {
  const callbackRef = React.useRef(callback);
  React.useLayoutEffect(() => {
    callbackRef.current = callback;
  });
  return React.useMemo(
    () => debounce((...args) => callbackRef.current(...args), delay),
    [delay]
  );
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function isValidJson(arg: any) {
  if (typeof arg !== "string") {
    return false;
  }
  try {
    JSON.parse(arg);
    return true;
  } catch {
    return false;
  }
}

export type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

function blobToBase64(blob: Blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

function toTitleCase(str: string) {
  return str.replace(
    /\w\S*/g,
    (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

function truncateFileName(fileName: string, maxLength?: number) {
  const length = maxLength ?? 30;
  if (fileName.length < length) {
    return fileName;
  }
  const parts = fileName.split(".");
  const extension = parts.pop();
  const filenameWithoutExtension = parts.join(".");

  // Truncate the filename to the desired length
  const truncatedFilename = filenameWithoutExtension.substring(0, length);

  // Combine the truncated filename and extension
  return `${truncatedFilename.slice(0, -3)}....${extension}`;
  // return fileName.substring(0, 20) + '...';
}

export function camelCaseToNormalCase(str) {
  // Replace camel case with spaces and capitalize each word
  return str
    ?.replace(/([A-Z])/g, " $1") // Add space before each uppercase letter
    ?.replace(/^./, function (match) {
      return match.toUpperCase();
    }) // Capitalize the first letter
    ?.trim(); // Remove any leading/trailing spaces
}

const maskingValue = (value, num = 4, mask = "*") =>
  `${value}`.slice(-num).padStart(`${value}`.length, mask);

const convertToLocalTime = (utcDateString: string) => {
  const utcDate = new Date(utcDateString);
  const localDate = new Date(
    utcDate.getTime() - utcDate.getTimezoneOffset() * 60000
  );
  const localDateString = localDate.toLocaleString();
  return localDateString;
};

function downloadFile(
  blob: Blob,
  filename: string = dayjs().format("DD-MM-YYYY hh:mm:ss"),
  fileType?: string
) {
  const url = window.URL.createObjectURL(new Blob([blob]));
  // Create a link element
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${filename}${fileType ? `.${fileType}` : ""}`); // Set filename and extension
  document.body.appendChild(link);

  // Trigger the download
  link.click();

  // Cleanup
  link.parentNode.removeChild(link);
  window.URL.revokeObjectURL(url);
}

function maskName(name: string) {
  const parts = name.split(" ");
  const maskedParts = parts.map((part) => {
    if (part.length <= 2) {
      return part;
    } else {
      return part[0] + "*".repeat(part.length - 1);
    }
  });
  return maskedParts.join(" ");
}

function maskEndOfValue(value, num = 3, maskChar = "*", maskCharLength = 3) {
  const maskedPart = value.slice(0, -num) + maskChar.repeat(maskCharLength);
  return maskedPart;
}

function convertToTitleCase(text: string) {
  return text
    .split(/[_-]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function formatInputNumberValueToCurrency(value: number) {
  return `S$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function parseInputNumberValueToCurrency(value: string) {
  return value?.replace(/[^\d.]/g, "");
}

function generatePhoneNumber(value: PhoneNumber | string) {
  if (typeof value === "object") {
    return `+${value.countryCode || ""}${value.areaCode || ""}${
      value.phoneNumber || ""
    }`;
  } else {
    return value;
  }
}

function calculateProgress(value: number, total: number): number {
  return (value / total) * 100;
}

function convertMacroCamelCaseToNormalCase(str: string) {
  return str.replace(/([A-Z])/g, " $1");
}

function getCommonOtherwiseFullName(commonName: string, fullName: string) {
  if (commonName) {
    return commonName;
  } else {
    return fullName;
  }
}

const formatOSXCascader = (
  sortList: DefaultOptionType[],
  value: CascaderProps["value"][]
): Promise<{ name: string; search: string }[]> => {
  return new Promise((resolve) => {
    const result: { [key: string]: string[] } = value?.reduce(
      (acc, [key, value]) => {
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(value);
        return acc;
      },
      {}
    );

    const transformedData = Object.entries(result).map(([key, values]) => {
      if (values[0]) {
        return {
          name: key,
          search: values.join(", "),
        };
      } else {
        const optionListTemp = sortList?.find((e) => e?.value === key);
        const optionListTempChildren = optionListTemp?.children;
        return {
          name: key,
          search: optionListTempChildren
            ?.map((item) => item?.label)
            ?.join(", "),
        };
      }
    });

    resolve(transformedData);
  });
};

function trimText(
  text: string | undefined,
  options: {
    maxLength?: number;
    ellipsis?: boolean;
    ellipsisText?: string;
  } = {}
): string {
  if (!text) return "";

  const { maxLength = 100, ellipsis = true, ellipsisText = "..." } = options;

  if (text.length <= maxLength) return text;

  const trimmedText = text.slice(0, maxLength);

  return ellipsis ? `${trimmedText.trim()}${ellipsisText}` : trimmedText.trim();
}

/**
 * Abbreviates a number by converting it to a shorter form with a letter suffix,
 * such as "k" for thousands, "m" for millions, etc.
 *
 * @param number - The number to abbreviate.
 * @param decimal - The number of decimal places to round to.
 * @returns The abbreviated string.
 * @example
 * abbrNum(12 , 1)          => '12'
 * abbrNum(0 , 2)           => '0'
 * abbrNum(1234 , 0)        => '1k'
 * abbrNum(34567 , 2)       => '34.57k'
 * abbrNum(918395 , 1)      => '918.4k'
 * abbrNum(2134124 , 2)     => '2.13m'
 * abbrNum(47475782130 , 2) => '47.48b'
 */
function formatNumberToStringAbbreviation(
  number: number,
  decimal: number = 0
): string {
  // 2 decimal places => 100, 3 => 1000, etc
  let result: string = "";
  decimal = Math.pow(10, decimal);

  // Enumerate number abbreviations
  const abbrev: string[] = ["k", "m", "b", "t"];

  // Go through the array backwards, so we do the largest first
  for (let i = abbrev.length - 1; i >= 0; i--) {
    // Convert array index to "1000", "1000000", etc
    const size = Math.pow(10, (i + 1) * 3);

    // If the number is bigger or equal do the abbreviation
    if (size <= number) {
      // Here, we multiply by decPlaces, round, and then divide by decPlaces.
      // This gives us nice rounding to a particular decimal place.
      number = Math.round((number * decimal) / size) / decimal;

      // Handle special case where we round up to the next abbreviation
      if (number === 1000 && i < abbrev.length - 1) {
        number = 1;
        i++;
      }

      // Add the letter for the abbreviation
      result = number + abbrev[i];

      // We are done... stop
      break;
    }
  }

  return result;
}

function isJsonValidString(str) {
  try {
    JSON.parse(str);
  } catch {
    return false;
  }
  return true;
}

function truncateString(string = "", maxLength = 50): string {
  // Check if the string length exceeds the maximum length
  if (string.length > maxLength) {
    // Return the truncated string with an ellipsis
    return `${string.substring(0, maxLength)}…`;
  }
  // Return the original string if it does not exceed the maximum length
  return string;
}

/**
 * Given a number, returns the ordinal suffix for that number.
 * @param num - The number to get the ordinal suffix for.
 * @example
 * getOrdinalSuffix(1) // 'st'
 * getOrdinalSuffix(2) // 'nd'
 * getOrdinalSuffix(3) // 'rd'
 * getOrdinalSuffix(4) // 'th'
 * getOrdinalSuffix(11) // 'th'
 * getOrdinalSuffix(12) // 'th'
 * getOrdinalSuffix(13) // 'th'
 * getOrdinalSuffix(21) // 'st'
 * getOrdinalSuffix(22) // 'nd'
 * getOrdinalSuffix(23) // 'rd'
 *
 */
function getOrdinalSuffix(num: number) {
  // This array holds the different ordinal suffixes.
  // The first element is for numbers ending in 1, the second is for numbers ending in 2, and the third is for numbers ending in 3.
  // The fourth element is the default, which is used for all other numbers.
  const s = ["th", "st", "nd", "rd"];

  // Calculate the remainder of the number divided by 100.
  // This is because the ordinal suffixes only change when the number ends in 1, 2, 3, or 4.
  const v = num % 100;

  // Return the appropriate ordinal suffix based on the value of v.
  // If v is 1, 21, 31, etc., return 'st'.
  // If v is 2, 22, 32, etc., return 'nd'.
  // If v is 3, 23, 33, etc., return 'rd'.
  // Otherwise, return 'th'.
  return s[(v - 20) % 10] || s[v] || s[0];
}

function encryptAES128(data: string, key: string): string {
  const encrypted = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  // Return the encrypted data in Base64 format
  return encrypted.toString();
}

const validateFileSize = (
  _: Rule,
  files: UploadFile[],
  MAX_FILE_SIZE: number
) => {
  if (!files?.length) return Promise.resolve();

  const hasOversizedFile = files.some((file) => file.size > MAX_FILE_SIZE);
  return hasOversizedFile
    ? Promise.reject(new Error("File must be smaller than 2MB"))
    : Promise.resolve();
};

export const Helper = {
  isJsonValidString,
  getInitials,
  formateDateToString,
  convertFileSize,
  formatToSGCurrency,
  getOrdinal,
  formatNumber,
  getAge,
  delay,
  formatterNumber,
  parserNumber,
  onlyAllowNumber,
  getFNAStatusColor,
  formatDateTime,
  formatTimeOnly,
  formatDateOnly,
  formatToLocalDateTime,
  formatToLocalTimeOnly,
  getFNALabelColor,
  useDebounce,
  debounce,
  validateEmail,
  isValidJson,
  getBase64,
  blobToBase64,
  toTitleCase,
  truncateFileName,
  formatter2Commas,
  formatter3Digits,
  parserComma,
  camelCaseToNormalCase,
  maskingValue,
  convertToLocalTime,
  downloadFile,
  maskName,
  maskEndOfValue,
  convertToTitleCase,
  sanitizeHTMLContent,
  formatInputNumberValueToCurrency,
  parseInputNumberValueToCurrency,
  generatePhoneNumber,
  calculateProgress,
  convertMacroCamelCaseToNormalCase,
  getCommonOtherwiseFullName,
  formatOSXCascader,
  trimText,
  formatNumberToStringAbbreviation,
  formatMonthOnly,
  formatThousands,
  truncateString,
  getOrdinalSuffix,
  encryptAES128,
  validateFileSize,
};
