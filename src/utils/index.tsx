const innerWidth = global?.window && window.innerWidth
export const isMobile = innerWidth <= 760 
export const itemsShow = isMobile ? 1 : 3;
const GROUP_SIZE = 3;


export function groupedItems(items: any, groupSize?: number) {
    return items.reduce(
        (acc: any, item: any) => {
            if (acc[acc.length - 1].length >= (groupSize || GROUP_SIZE)) {
                return [...acc, [item]];
            }
            acc[acc.length - 1].push(item);
            return acc;
        },
        [[]]
    )
}