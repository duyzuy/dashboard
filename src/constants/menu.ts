import {
  PieChartOutlined,
  FileTextOutlined,
  TagsOutlined,
  TranslationOutlined,
  FolderOutlined,
} from "@ant-design/icons";

export const MENU_ITEMS = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: PieChartOutlined,
  },
  {
    id: "post",
    label: "Bài viết",
    path: "/admin/post",
    icon: FileTextOutlined,
  },
  {
    id: "category",
    label: "Danh mục",
    path: "/admin/category",
    icon: FolderOutlined,
  },
  {
    id: "tag",
    label: "Tags",
    path: "/admin/tag",
    icon: TagsOutlined,
  },
  {
    id: "language",
    label: "Quản lý ngôn ngữ",
    path: "/admin/language",
    icon: TranslationOutlined,
  },
];
