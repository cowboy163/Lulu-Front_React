import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./According.scss"
import {useSelector} from "react-redux";


const According = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const current_product = useSelector(state => state?.singleProductReducers.single_product_data)
    // console.log("current product",current_product)
    return (
        <div>
            <div className='AccordionSection'>
                    <ul>
                        { current_product?.featurePanels?.map((item,index) =>
                            <li key={index} id={`according${index}`}>
                            <Accordion expanded={expanded === index} onChange={handleChange(index)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <img className="AccordionLogo" src={item.iconPath} sx={{width: '33%', flexShrink: 0}} alt=''/>
                                    <div className = "AccordionTitle">{item.title.split("(Click to Expand").map(title=>title.trim())[0]}</div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className="text">

                                        {item.content?.map((content,index) => <div className="AccordionDetailContent" key={index}>{content}</div>)}
                                    </div>

                                </AccordionDetails>
                            </Accordion>
                            </li>
                        )
                        }
                    </ul>


                </div>


            </div>
    );
}
export default According