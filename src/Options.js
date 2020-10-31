import React from 'react';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import BasicTreeData from './BasicTreeData';

export default function Options(props){
    const [selection,setSelection] = React.useState(false);

    // React.useEffect(()=>{
    //      console.log('selection',selection);   
    // },[selection]);

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} md={12}>
                <FormControlLabel
                control={
                <Switch 
                value={selection}
                onChange={e=>{setSelection(e.target.checked)}}
                />
                }
                label="Selection"
                />
            </Grid>
            <Grid item xs={12} md={12}>
                <BasicTreeData selection={selection} />
            </Grid>            
        </Grid>
    )
}
