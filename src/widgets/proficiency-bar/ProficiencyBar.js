import styles from './ProficiencyBar.module.scss';

const ProficiencyBar = (props) => {
    const { listData } = props;
    const styleObj = {
        maxWidth: listData.proficiency
    };
    
    return (
        <div className={styles.proficiencyBarContainer}>
            <div>{listData.label}</div>
            <div className={styles.barBackground}>
                <div className={styles.progressBar} style={styleObj}></div>
            </div>
            {props.showLevel && (
                <div className={styles.proficiencyLevel}>{listData.level}</div>
            )}

        </div>    
    );
}

export default ProficiencyBar;