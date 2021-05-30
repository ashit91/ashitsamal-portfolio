

const ProficiencyBar = (props) => {
    const styleObj = {
        borderRadius: '3px',
        border: '3px solid ' + props.color,
    }
    return (
        <div className="proficiencyBarContainer" style={styleObj}>

        </div>    
    );
}

export default ProficiencyBar;