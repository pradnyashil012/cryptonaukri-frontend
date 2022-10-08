import React,{useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {

  const [expanded, setExpanded] = useState(false);

  const handleChange =
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{textAlign:"left"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><b>Who is eligible for this course?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Any working professional or student who is web3 enthusiasts are eligible
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{textAlign:"left"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><b>How will my doubts get solved?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          2 hours of live doubt solving with Mentor, everyday.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{textAlign:"left"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><b>How will the placement cell help me get a job?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          CryptoNaukri is collaborating with Indian and International web3 startups and good paying web3 IT Consultancy firms.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{textAlign:"left"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><b>What will be the frequency of 1 on 1 sessions with a mentor?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can schedule a 1-on-1 session with Mentor anytime during weekdays.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style={{textAlign:"left"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><b>What is the role of the mentor?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Mentor will help you in completing 8 projects, doubt solving, interview preparation and career guidance. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} style={{textAlign:"left"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><b>What are the prerequisites of the bootcamp?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Whether you are a professional or a student, you are eligible.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} style={{textAlign:"left"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><b>What is the duration of the bootcamp?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          3 months = 2 months (Training) + 1 month (placements)
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} style={{textAlign:"left"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><b>When will the placement start?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          After 2 months training, 1 month will be dedicated to placement preparation.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} style={{textAlign:"left"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          // style={{backgroundColor: "#d3d3d3"}}
        >
          <Typography ><b>How can I apply?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Fill the registration form and get the interview call.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      
    </div>
  );
}
