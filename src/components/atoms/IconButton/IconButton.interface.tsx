import {SidebarItemsType} from "../../../__types__";

export interface IconButtonInterface {
    icon: SidebarItemsType,
    type?: 'regular' | 'outline' | 'text',
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl',
    testID?: string,
}
