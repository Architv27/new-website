import React from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Fade, Zoom } from 'react-reveal';
import "../ProjectPage.css";

const ProjectDialog = ({ open, onClose, slideIndex, slides, slideTitles, slideDescriptions, icons }) => {
    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        paddingTop: 20,
        width: '90%',
        paddingLeft:30,
        backgroundColor: 'white',
        zIndex: 1, // Use MUI's z-index for the AppBar to ensure it's above Dialog content
    };
    
    const imageStyle = {
        width: '100%',
        objectFit: 'cover',
        marginBottom: '1em'
    };
   
    return (
    <Zoom>
        <Dialog  classes={{ paper: 'dialog-rounded' }} open={open} onClose={onClose}>
            <Fade>

            <DialogTitle style={headerStyle}>
                <h1>
                {slideTitles[slideIndex]}
                </h1>
                <IconButton onClick={onClose} aria-label="close">
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent style={{ overflowY: 'auto', marginTop: 0 }}>
                <img 
                    src={slides[slideIndex]} 
                    alt={slideTitles[slideIndex]} 
                    style={imageStyle}
                    />
                <h3>Project Description</h3>
                <p>{slideDescriptions[slideIndex]}</p>
                {/* Software Tools and Languages Section */}
                <div>
                    <h3>Software Tools and Languages</h3>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {icons.map((icon, index) => (
                            <img key={index} src={icon} alt="Tool Icon" style={{ width: 50, height: 50, paddingLeft: 10, alignItems:"flex-start", display:"flex", paddingTop:20, marginBottom:20 }} />
                            ))}
                    </div>
                </div>
            </DialogContent>
                            </Fade>
        </Dialog>
    </Zoom>
    );
};

export default ProjectDialog;
