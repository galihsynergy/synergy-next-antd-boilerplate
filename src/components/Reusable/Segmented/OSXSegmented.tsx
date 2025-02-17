import { Tabs, TabsProps } from 'antd';
import { DotsHorizontal } from '@untitled-ui/icons-react';
import './style.css';

interface IOSXSegmented extends TabsProps {
  items: TabsProps['items'];
  customClassName?: string;
  segmentedType?: 'block' | 'regular';
}

/**
 *  This is a segmented with tabs ant design behaviour, use and treat it like a tabs
 *  Already standarized with our design
 *
 * @param param0 - Pass any tab props refer to this: https://ant.design/components/tabs#tabs
 * @returns
 */
const OSXSegmented = ({
  items,
  customClassName, // margin-none to remove margin
  segmentedType = 'regular',
  ...props
}: IOSXSegmented) => {
  if (segmentedType === 'block') {
    return (
      <Tabs
        className={`custom-tabs-like-segmented custom-tabs-like-segmented-block ${customClassName}`}
        items={items}
        {...props}
      />
    );
  }
  return (
    <Tabs
      moreIcon={<DotsHorizontal width={20} />}
      className={`custom-tabs-like-segmented ${customClassName}`}
      items={items}
      {...props}
    />
  );
};

export default OSXSegmented;
