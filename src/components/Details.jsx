import buttons from "../styles/Buttons.module.css";

const Details = (props) => {

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