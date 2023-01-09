import * as React from 'react';
import {styled} from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {useEffect} from "react";
import BillingInfoDetail from "./BillingInfoDetail/BillingInfoDetail";
import {useDispatch, useSelector} from "react-redux";
import {checkBoxStatus} from "../../../../actions/placeOrderActions";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props}/>
))(({theme}) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}}/>}
        {...props}
    />
))(({theme}) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const BillingInfo = ({getCheckBox}) => {
    const dispatch = useDispatch()
    const [expanded, setExpanded] = React.useState('');

    let checkBox = useSelector(state => state?.placeOrderReducers.checkBox)
    const handleChange = () => () => {
        dispatch(checkBoxStatus(!checkBox))
    };

    // accordion control
    useEffect(() => {
        // console.log('checkbox check', checkBox)
        checkBox? setExpanded('') : setExpanded('panel1')
    }, [checkBox])

    useEffect(() => {
        getCheckBox(checkBox)
    }, [checkBox, getCheckBox])

    return (
        <div style={{marginTop: "2rem"}}>
            <Accordion expanded={expanded === 'panel1'}
                       onChange={handleChange()}
            >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>
                            <input type="checkbox" checked={checkBox} />
                            Billing address is same
                        </Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                        <h2 className="placeOrderInfoTitle">Billing Address:</h2>
                        <BillingInfoDetail checkBox={checkBox}/>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default BillingInfo