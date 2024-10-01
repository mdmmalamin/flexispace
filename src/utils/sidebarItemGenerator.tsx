import { TSidebarItem, TUserPath } from "../types";

export const sidebarItemGenerator = (items: TUserPath[], role: string) => {
  const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        name: item.name,
        path: `/${role}/${item.path}`,
        icon: item.icon,
      });
    }

    // if (item.children) {
    //   acc.push({
    //     name: item.name,
    //     children: item.children.map((child) => {
    //       if (child.name) {
    //         return {
    //           name: child.name,
    //           path: `/${role}/${child.path}`,
    //         };
    //       }
    //     }),
    //   });
    // }

    return acc;
  }, []);

  // console.log(sidebarItems);

  return sidebarItems;
};
