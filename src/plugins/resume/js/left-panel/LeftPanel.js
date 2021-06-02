
import styles from '../Resume.module.scss';
import LeftPanelSection from './LeftPanelSection';

const LeftPanel = (props) => {
    const { textData: leftData } = props;

    return (
        <div className={styles.leftPanelContainer}>
            <div className={styles.name}>
                {leftData.name}
            </div>
            <div className={styles.designation}>
                {leftData.designation}
            </div>

            <div className={styles.leftSectionsContainer}>
                {leftData.section_data.map((sectionInfo, index) => {
                    return (
                        <LeftPanelSection key={index} sectionInfo={sectionInfo}>
                            {sectionInfo.type === "custom" && (
                                <div>Hi</div>
                            )}
                        </LeftPanelSection>
                    );
                })}
            </div>
        </div>
    );
}

export default LeftPanel;