import styles from '../Resume.module.scss';

const LeftPanelSection = (props) => {
    const { sectionInfo } = props;

    return (
        <div className={styles.oneSectionContainer}>
            <div className={styles.leftSectionHeader}>{sectionInfo.heading}</div>
            {sectionInfo.type === "bar" && (
                <>
                    {sectionInfo.list_data.map((list, index) => {
                        return (
                            <>
                                <div>{list.label}</div>
                                <div></div>
                                <div>{list.level}</div>
                            </>                            
                        );
                    })}
                </>
            )}
            {sectionInfo.type === "list" && (
                <ul>
                    {sectionInfo.list_data.map((list, index) => {
                        return (
                            <li key={index}>{list.label}</li>
                        );
                    })}
                </ul>
            )}
            {sectionInfo.type === "href-list" && (
                <ul>
                    {sectionInfo.list_data.map((list, index) => {
                        return (
                            <li key={index}>
                                {list.link.text ? (
                                    <>{list.label}<a href={list.link.url}>{list.link.text}</a></>
                                ) : (
                                    <a href={list.link.url}>{list.label}</a>
                                )} 
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );

}

export default LeftPanelSection;