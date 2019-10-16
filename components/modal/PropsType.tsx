import { MouseEventHandler, HTMLAttributes, ReactNode } from 'react';
import PopupTypes from 'zarm/lib/popup/PropsType';

type FnReactNode = () => ReactNode;

export interface ModalBasicProps extends PopupTypes {
  prefixCls: string;
  okText: ReactNode;                     // 确认按钮的事件
  cancelText: ReactNode;                 // 取消按钮的事件
  closable: boolean;                     // 是显示关闭按钮
  title?: ReactNode;                     // modal的标题
  zIndex: number;                        // modal组件的zIndex
  maskClosable: boolean;                 // 点击空白区域是否关闭
  mask: boolean;                         // 是否显示遮罩层
  radius: boolean;                       // 是否显示圆角
  footer?: (ReactNode | FnReactNode);    // modal底部的内容，为null时不显示底部
  centered: boolean;                     // 是否居中显示
  onOk?: () => void;                     // 点击了确定按钮的回调函数
  onCancel?: () => void;                 // 点击了取消按钮的回调函数
  autoFocus: boolean;                    // 打开弹框时自动获取焦点
  disableEscapeKeyDown: boolean;         // 禁用按esc按键的时候，执行onCancel的行为
  disableEnterKeyDown: boolean;          // 禁用按enter按键的时候，执行onOk的行为
  hideWhenShowOthers: boolean;           // 显示其他Modal的时候，是否隐藏当前Modal
  scrollInModal: boolean;                // 是否开启在Modal内部滚动的效果
}

export type ModalProps = Merge<HTMLAttributes<HTMLDivElement>, ModalBasicProps>;

export interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  height?: number | string;
}

export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
}

export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  closable: boolean;
  onCancel?: MouseEventHandler<HTMLDivElement>;
}

export interface StyleType {
  modal: {
    display?: string;
    [index: string]: any;
  };
  dialog: {
    width: string | number | undefined;
    minWidth: string | number | undefined;
    [index: string]: any;
  };
}
