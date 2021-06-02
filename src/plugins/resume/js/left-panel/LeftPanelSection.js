import ProficiencyBar from '../../../../widgets/proficiency-bar/ProficiencyBar';
import styles from '../Resume.module.scss';

const LeftPanelSection = (props) => {
    const { sectionInfo } = props;

    return (
        <div className={styles.leftOneSectionContainer}>
            {(sectionInfo.type !== "custom" || (sectionInfo.type === "custom" && props.children)) && (
                <div className={styles.leftSectionHeader}>{sectionInfo.heading}</div>
            )}
            {sectionInfo.type === "custom" && (
                <div className={styles.leftSectionBody}>
                    {props.children}
                </div>
            )}
            {sectionInfo.type === "bar" && (
                <div className={styles.leftSectionBody}>
                    {sectionInfo.list_data.map((list, index) => {
                        return (
                            <ProficiencyBar 
                                listData={list} showLevel={true}
                            />                            
                        );
                    })}
                </div>
            )}
            {sectionInfo.type === "list" && (
                <div className={styles.leftSectionBody}>
                    <ul>
                        {sectionInfo.list_data.map((list, index) => {
                            return (
                                <li key={index}>{list.label}</li>
                            );
                        })}
                    </ul>
                </div>
            )}
            {sectionInfo.type === "href-list" && (
                <div className={styles.leftSectionBody}>
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
                </div>
            )}
        </div>
    );
}

export default LeftPanelSection;