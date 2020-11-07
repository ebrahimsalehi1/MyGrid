import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
//import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function Form(props){

    const {onSave} = props;
    const [data,setData] = React.useState({});

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
                <TextField label="description" placeholder="description" 
                value={data.description} 
                onChange={event=>setData({...data,description:event.target.value})}/>
            </Grid>   
            <Grid item xs={12} md={4}>
                <TextField label="code" placeholder="code"
                value={data.code} 
                onChange={event=>setData({...data,code:event.target.value})}/>                                
            </Grid>   
            <Grid item xs={12} md={4}>
                <Select value={data.type} onChange={(e,newValue)=>console.log(e,newValue)}>
                    <MenuItem value="TEC">TEC</MenuItem>
                    <MenuItem value="PROD">PROD</MenuItem>
                    <MenuItem value="HR">HR</MenuItem>
                    <MenuItem value="ASSETINLOCATION">ASSETINLOCATION</MenuItem>
                </Select>
            </Grid>   
            {//props.type==='detail' &&        
            <Grid item xs={12} md={12}>
                <Button variant="contained" color="primary" onClick={()=>{                   
                    onSave({description:data.description,code:data.code,type:data.type});
                }}>Save</Button>
            </Grid>  
            }        
        </Grid>
    )
}


export default function ShowForm(props){
    const {type,columns,onClose,onSave}=props;
    const [open,setOpen] = React.useState(true);

    
    return (
        <>
        {type==='dialog' && 
        <Dialog open={true} onClose={onClose}>
            <DialogTitle>Title of Dialog</DialogTitle>
            <DialogContent>
                <Form 
                    type={type}
                    onSave={newData=>{
                        onSave(newData);
                        onClose();
                    }}                
                />
            </DialogContent>
            <DialogActions>
                {/* <Button variant="outlined" color="primary" onClick={()=>{onSave(newData)}}>Ok</Button> */}
                {/* <Button variant="outlined" color="primary" onClick={onClose}>Cancel</Button> */}
            </DialogActions>
        </Dialog>
        }
        {
            type==='detail' && 
            <Form
            type={type}
            onSave={()=>{
                onSave();
            }}
            />
        }
        </>
    )
}
