export interface ISidebarProps {
    isNonMobile: boolean;
    drawerWidth: string;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}
