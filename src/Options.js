import React from 'react';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import BasicTreeData from './BasicTreeData';
import MaterialTable from './MaterialTable';
import Add from '@material-ui/icons/Add';
import ShowForm from './Form';


export default function Options(props){

    const [openDialog,setOpenDialog] = React.useState(false);
    const [data,setData] = React.useState(props.data);
    const [rowExpanded,setRowExpanded] = React.useState(null);

    const columns=[
        { title: 'description', field: 'description'},
        { title: 'code', field: 'code'},
        { title: 'type', field: 'type'},
    ];

    let actions = [{
        icon:Add,   
        tooltip:'Add a row on tree',
        onClick: (event, rowData) => setOpenDialog(true)
    }];

    let detailPanel = [];

    const editable={
        onRowAdd:newData=>new Promise((resolve,reject)=>{
            console.log('onRowAdd',newData);     
            try{
                resolve();
            }
            catch(e){
                reject();
            }            
        }),
        onRowUpdate:(newData,oldData)=>new Promise((resolve,reject)=>{

        }),
        onRowDelete:oldData=>new Promise((resolve,reject)=>{
            console.log('onRowDelete',oldData); 
            try{
                    // tableData , childRows
                if(!oldData.tableData.childRows)
                {
                    const dataDelete = [...data];
                    console.log('dataDelete 1',dataDelete.length);
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    console.log('dataDelete 2',dataDelete.length);

                    setData([...dataDelete]);

                    resolve();
                }
                else{
                    alert('you can delete data, it has childs');
                    reject();
                }
            }
            catch(e){
                reject();
            }                   
        })
    };

    detailPanel = [
        {
            icon:'add',   
            tooltip:'Add on Row',
            render: rowData => {
                console.log(rowData);
                return <ShowForm type='detail' />
            } ,
        }
    ];
    
    console.log('Options is rendering',data.length);

    return (
        <Grid container spacing={1}>
            count:{data.length}
            {/* <Grid item xs={12} md={12}>
                <FormControlLabel
                control={
                <Switch 
                value={addMode}
                onChange={e=>{setAddMode(e.target.checked)}}
                />
                }
                label="Add Mode"
                />
            </Grid> */}
            <Grid item xs={12} md={12}>
                <MaterialTable 
                columns={columns}
                data={data}
                actions={actions}
                parentChildData={(row, rows) => rows.find(a => a.id === row.parentId)}
                editable={editable}
                onTreeExpandChange={(event,nodes)=>{
                    console.log('nodes',nodes,event);
                    if(nodes){
                        setRowExpanded(event);        
                    }
                }}
                //detailPanel={detailPanel}
                options={{
                    rowStyle:(event,rowData)=>{
                        if(rowExpanded && rowExpanded.id===event.parentId)
                            return {
                                backgroundColor:'#ff0011',
                            }
                        console.log('options',event,event.type,rowData);
                        switch(event.type){
                            case 'TEC':
                                return {
                                    backgroundColor:'#1111ff',
                                }
                            case 'PROD':
                                return {
                                    backgroundColor:'#00ff11',
                                }
                            case 'HR':
                                return {
                                    backgroundColor:'#0000ff',
                                    color:'#ffffff'
                                }
                            case 'ASSETINLOCATION':
                                return {
                                    backgroundColor:'#0011ff',
                                }                                
                            default:
                        }


                    }
                }}
                />
                {openDialog &&
                    <ShowForm type='dialog' onClose={()=>setOpenDialog(false)}/>
                }
            </Grid>            
        </Grid>
    )
}
