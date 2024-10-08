import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}

const SortSelector = ({onSelectSortOrder, sortOrder}: Props) => {
    const sortOrders = [
        { value : '', lable:'Relevence' },
        { value : '-added', lable:'Date added' },
        { value : 'name', lable:'Name' },
        { value : '-released', lable:'Release Date' },
        { value : '-metaritic', lable:'Popularity' },
        { value : '-rating', lable:'Average Rating' }
    ]

    const currentOrder = sortOrders.find(order => order.value === sortOrder);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: {currentOrder?.lable || 'Relavence'}
            </MenuButton>
            <MenuList>
                {sortOrders.map(order => (
                    <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>
                        {order.lable}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
      )
}

export default SortSelector
