export const TabItem = ({ title, isActive, tabKey, onTabClick }) => {

    return (
        <li
        className="nav-item"
        >
            <a
                className={isActive ? 'nav-link active' : 'nav-link'}
                onClick={() => onTabClick(tabKey)}
            >
                {title}
            </a>
        </li>
    )
}