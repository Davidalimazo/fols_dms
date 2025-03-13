import {
  DashboardIcon,
  UserDetailsIcon,
  LogoutIconIcon,
  UserIcon,
  SupportIcon,
  UserGroupIcon,
} from "@/assets";
import appRoutes from "./appRoutes";
import { AboutIcon } from "@/assets/svg_components/AboutIcon";

export const navItems = [
  {
    name: "Dashboard",
    href: appRoutes.dashboard,
    icon: (isActive: boolean) => (
      <DashboardIcon
        color={isActive ? "#6BBC45" : "#3E3E3E"}
        className="w-5 h-5"
      />
    ),
  },
  {
    name: "Login",
    href: appRoutes.login,
    icon: (isActive: boolean) => (
      <UserDetailsIcon
        color={isActive ? "#6BBC45" : "#3E3E3E"}
        className="w-5 h-5"
      />
    ),
  },
  {
    name: "Create Account",
    href: appRoutes.createAccount,
    icon: (isActive: boolean) => (
      <UserIcon color={isActive ? "#6BBC45" : "#3E3E3E"} className="w-5 h-5" />
    ),
  },
  {
    name: "About",
    href: appRoutes.about,
    icon: (isActive: boolean) => (
      <AboutIcon color={isActive ? "#6BBC45" : "#3E3E3E"} className="w-5 h-5" />
    ),
  },
  {
    name: "Resellers",
    href: appRoutes.resellers,
    icon: (isActive: boolean) => (
      <UserGroupIcon
        color={isActive ? "#6BBC45" : "#3E3E3E"}
        className="w-5 h-5"
      />
    ),
  },
  {
    name: "Support",
    href: appRoutes.support,
    icon: (isActive: boolean) => (
      <SupportIcon
        color={isActive ? "#6BBC45" : "#3E3E3E"}
        className="w-5 h-5"
      />
    ),
  },
];

export const authNavItems = [
  {
    name: "Dashboard",
    href: appRoutes.dashboard,
    icon: (isActive: boolean) => (
      <DashboardIcon
        color={isActive ? "#6BBC45" : "#3E3E3E"}
        className="w-5 h-5"
      />
    ),
  },
  {
    name: "About",
    href: appRoutes.about,
    icon: (isActive: boolean) => (
      <AboutIcon color={isActive ? "#6BBC45" : "#3E3E3E"} className="w-5 h-5" />
    ),
  },
  {
    name: "Resellers",
    href: appRoutes.resellers,
    icon: (isActive: boolean) => (
      <UserGroupIcon
        color={isActive ? "#6BBC45" : "#3E3E3E"}
        className="w-5 h-5"
      />
    ),
  },
  {
    name: "Support",
    href: appRoutes.support,
    icon: (isActive: boolean) => (
      <SupportIcon
        color={isActive ? "#6BBC45" : "#3E3E3E"}
        className="w-5 h-5"
      />
    ),
  },
];

export const otherNavItems = [
  {
    name: "Logout",
    href: "/",
    icon: <LogoutIconIcon className="w-5 h-5" />,
  },
];
