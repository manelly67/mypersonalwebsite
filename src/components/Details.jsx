import buttons from "../styles/Buttons.module.css";

const Details = (props) => {
// this component will not be used for the moment 
// and will not be removed for possible future use.
const {selectedProj, setShowDetails, arrayProjects } = props;
const { buttonE } = buttons;

    return(
        <>
        <p>{selectedProj}</p>
        <button
        className={buttonE}
        onClick={()=> setShowDetails(false)}
        >BACK</button>
        </>
    );
};

export default Details;