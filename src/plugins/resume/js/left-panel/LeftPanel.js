
import styles from '../Resume.module.scss';

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
                
            </div>

        </div>
    );
}

export default LeftPanel;