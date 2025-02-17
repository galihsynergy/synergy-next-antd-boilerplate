import { ChevronDown, ChevronUp } from "@untitled-ui/icons-react";
import { SortOrder } from "antd/es/table/interface";
import clsx from "clsx";
import { JSX } from "react";

/**
 * Render a sort icon for a table column header.
 *
 * The component will render both an up and down arrow. The up arrow will be
 * colored if the column is sorted in ascending order, and the down arrow will
 * be colored if the column is sorted in descending order.
 *
 * @param {{ sortOrder: SortOrder }} props Props passed to the component.
 * @returns {JSX.Element} The JSX element for the sort icon.
 */
export function sortIcon(props: { sortOrder: SortOrder }): JSX.Element {
  const asc = props.sortOrder === "ascend";
  const desc = props.sortOrder === "descend";

  return (
    <div>
      <ChevronUp
        width={16}
        height={16}
        className={clsx(`-mb-2`, asc ? "text-fg-brand-primary" : "")}
      />

      <ChevronDown
        width={16}
        height={16}
        className={clsx(`-mt-2`, desc ? "text-fg-brand-primary" : "")}
      />
    </div>
  );
}
