
import styles from '../Resume.module.scss';

const RightPanel = (props) => {
    const { textData: rightData } = props;

    return (
        <div className={styles.rightPanelContainer}>
            <div className={styles.headline}> 
                {rightData.summary_text}
            </div>
            <div></div>
        </div>
    );
}

export default RightPanel;