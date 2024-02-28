
interface Props {
    itemTitle: string,
    changePage: (itemTitle: string) => void
}

const NavItem = ({ itemTitle, changePage }: Props) => {
    return (
        <li onClick={() => changePage(itemTitle)} className="nav-item btn btn-danger mx-1">{itemTitle}</li>
    )
}

export default NavItem