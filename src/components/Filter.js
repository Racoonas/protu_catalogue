import { useSearchParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';

function Filter({filterState, setFilterState}){            

    const [searchParams, setSearchParams]  = useSearchParams();  

    const familyDropdownOptions = ['All','Animals','Croissants','Dovbushi','FBG','Limestones','Noses','Playground','Plushes','Simples','Stones','Swelled','Waves']    
    const sizeDropdownOptions = ['All','S','M','L','XL','XXL','MEGA']
    const gripDropdownOptions = ['All','Crimp','Edge','Foot','Handle','Jug','Pinch','Pocket','Sloper','Swing','Toy']
    const complexityDropdownOptions = ['All','Easy','Medium','Guru']   
                    
    return (        
        <>
            <div className="filter">
                <div className="filter_select_wrapper">
                    <div className="filter_select_label">Family:</div>
                    <div className="filter_select_div">
                        <Form.Select id='familySelect' bsPrefix='filter_select' value={filterState.family} onChange={onFamilySelected}>
                            {familyDropdownOptions.map((option, index)=>{
                                return <option value = {option} key = {index}>{option}</option>
                            })}                                        
                        </Form.Select>
                    </div>                       
                </div>
                <div className="filter_select_wrapper">
                    <div className="filter_select_label">Size:</div>
                    <div className="filter_select_div">
                        <Form.Select id='sizeSelect' bsPrefix='filter_select' value={filterState.size} onChange={onSizeSelected}>
                            {sizeDropdownOptions.map((option, index)=>{
                                return <option value = {option} key = {index}>{option}</option>
                            })}
                        </Form.Select>
                    </div>
                </div>
                <div className="filter_select_wrapper">
                    <div className="filter_select_label">Grip:</div>
                        <div className="filter_select_div">
                            <Form.Select id='gripSelect' bsPrefix='filter_select' value={filterState.grip} onChange={onGripSelected}>
                                {gripDropdownOptions.map((option, index)=>{
                                    return <option value = {option} key = {index}>{option}</option>
                                })}
                            </Form.Select>
                    </div>
                </div>
                <div className="filter_select_wrapper">
                    <div className="filter_select_label">Complexity:</div>
                        <div className="filter_select_div">
                            <Form.Select id='complexitySelect' bsPrefix='filter_select' value={filterState.complexity} onChange={onComplexitySelected}>
                                {complexityDropdownOptions.map((option, index)=>{
                                    return <option value = {option} key = {index}>{option}</option>
                                })}
                            </Form.Select>
                        </div>          
                    </div>
            </div>
        </>
    )            
        
    function onFamilySelected(e){                
        let newState = {...filterState, family:e.target.value};
        setSearchParams(newState);
        setFilterState(newState);       
    }

    function onSizeSelected(e){
        let newState = {...filterState, size:e.target.value};
        setSearchParams(newState);
        setFilterState(newState);
    }

    function onGripSelected(e){
        let newState = {...filterState, grip:e.target.value};
        setSearchParams(newState);
        setFilterState(newState);        
    }

    function onComplexitySelected(e){
        let newState = {...filterState, complexity:e.target.value};
        setSearchParams(newState);
        setFilterState(newState);        
    }
}

export default Filter;
