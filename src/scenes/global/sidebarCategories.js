import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimeLineOutlinedIcon from "@mui/icons-material/TimeLineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
export const sidebarMenu = [
  {
    name: "",
    items: [
      {
        title: "Dashboard",
        icon: HomeOutlinedIcon,
        path: "/",
      },
    ],
  },
  {
    name: "Data",
    items: [
      {
        title: "Manage Team",
        icon: PeopleOutlinedIcon,
        path: "/team",
      },
      {
        title: "Contacts Information",
        icon: ContactsOutlinedIcon,
        path: "/contacts",
      },
      {
        title: "Invoices Balances",
        icon: ReceiptOutlinedIcon,
        path: "/invoices",
      },
    ],
  },
  {
    name: "Pages",
    items: [
      {
        title: "Profile Form",
        icon: PersonOutlinedIcon,
        path: "/form",
      },
      {
        title: "Calendar",
        icon: CalendarTodayOutlinedIcon,
        path: "/calendar",
      },
      {
        title: "FAX Page",
        icon: HelpOutlinedIcon,
        path: "/faq",
      },
    ],
  },
  {
    name: "Charts",
    items: [
      {
        title: "Bar Chart",
        icon: BarChartOutlinedIcon,
        path: "/bar",
      },
      {
        title: "Pie Chart",
        icon: PieChartOutlinedIcon,
        path: "/pie",
      },
      {
        title: "Line Chart",
        icon: TimeLineOutlinedIcon,
        path: "/line",
      },
      {
        title: "Geography Chart",
        icon: MapOutlinedIcon,
        path: "/geography",
      },
    ],
  },
];
