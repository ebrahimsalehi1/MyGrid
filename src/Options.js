import React from 'react';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import BasicTreeData from './BasicTreeData';
import MaterialTable from './MaterialTable';
import Add from '@material-ui/icons/Add';
import Next from '@material-ui/icons/SkipNext';
import Previous from '@material-ui/icons/SkipPrevious';
import Delete from '@material-ui/icons/Delete';
import Child from '@material-ui/icons/ChildCare';

import ShowForm from './Form';
import Button from '@material-ui/core/Button';

export default function Options(props){

    const [openDialog,setOpenDialog] = React.useState(false);
    const [data,setData] = React.useState(props.data);
    const [rowExpanded,setRowExpanded] = React.useState(null);
    const [rowData,setRowData] = React.useState();
    const COLORS = {
        prod:{backgroundColor:'#ff0012',color:'black'},
        hr:{backgroundColor:'#00ff00',color:'black'},
        assetinlocation:{backgroundColor:'#0000ff',color:'white'},
        others:{}
    };

    const columns=[
        { title: 'description', field: 'description',render:rowData=>(rowData.type==='PROD' ? <a href="http://aaaa" target="blank">{rowData.description}</a> : rowData.description) },
        { title: 'code', field: 'code'},
        { title: 'type', field: 'type'},
    ];

    let actions = [
        rowData => rowExpanded && rowExpanded.id===rowData.parentId ?({
            icon: () => (
                <Child
                    color={'disabled'}
                />
            ),
            tooltip: 'Childs',
            // onClick: (event, rowData) => {
            //     if (!rowData.disabled) {
            //         // do stuff
            //     } else {
            //         return null;
            //     }
            // },
        }):null,
        {
            icon:Add,   
            tooltip:'Add a row on tree',
            onClick: (event, rowData) => {
                setRowData(rowData);            
                setOpenDialog(true);
            }   
        },
        {
            isFreeAction:true,
            icon:Previous,   
            tooltip:'Previous',
            onClick: (event, rowData) => {
            }
        },                    
        {
            isFreeAction:true,
            icon:Next,   
            tooltip:'Next',
            onClick: (event, rowData) => {
            }
        },
];

    let detailPanel = [];

    const editable={
        onRowAdd: newData => new Promise((resolve,reject)=>{
            console.log('onRowAdd',newData);     
            try{
                let max = 0;
                data.forEach(item => {
                if (item.id > max) {
                    max = item.id;
                }
                });

                const mdata = [...data,{...newData,id:max+1,parentId:null}];
                setData(mdata);
                
                resolve();
            }
            catch(err){
                alert(err);
                reject();
            }            
        }),
        onRowUpdate:(newData,oldData)=>new Promise((resolve,reject)=>{
            try{
                const mdata = [...data];
                const foundedIndex = mdata.indexOf(oldData);

                console.log('onRowUpdate',newData,oldData,foundedIndex);

                if(foundedIndex!==undefined && foundedIndex>=0){
                    mdata.splice(foundedIndex,1,newData);      
                    setData(mdata);  
                }
                else{
                    alert("failed because it cannot find the node");
                    reject();   
                }
                resolve();
            }
            catch(err){
                alert(err)
                reject();   
            }  
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
            <Grid item xs={12} md={4}>
            <div style={{width:20,height:20,backgroundColor:'#FF0000'}}/>PROD
            </Grid>            

            <Grid item xs={12} md={4}>
            <div style={{width:20,height:20,backgroundColor:'#00FF00'}}/>HR
            </Grid>            


            <Grid item xs={12} md={4}>
            <div style={{width:20,height:20,backgroundColor:'#0000FF'}}/>ASSETINLOCATION
            </Grid>            

            <Grid item xs={12} md={12}>
            count:{data.length}
            </Grid>
            <Grid item xs={12} md={12}>
                <MaterialTable 
                columns={columns}
                data={data}
                actions={actions}
                parentChildData={(row, rows) => rows.find(a => a.id === row.parentId)}
                editable={editable}
                onTreeExpandChange={(event,nodes)=>{
                    //console.log('nodes',nodes,event);
                    if(nodes){
                        setRowExpanded(event);        
                    }
                }}
                //detailPanel={detailPanel}
                options={{
                    rowStyle:(event,rowData)=>{
                        /*
                        if(rowExpanded && rowExpanded.id===event.parentId)
                            return {
                                backgroundColor:'#ff0011',
                            }
                        */    
                        /*
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
                        */


                    },
                    cellStyle:(event,rowData)=>{
                        return (
                            event===rowData.description && rowData.type==='PROD'  ? COLORS.prod :
                            event===rowData.description && rowData.type==='HR' ? COLORS.hr :
                            event===rowData.description && rowData.type==='ASSETINLOCATION' ? COLORS.assetinlocation : COLORS.other
                        )                        
                    }
                }}
                onRowClick={(event,rowData) => setRowData(rowData)}
                />
                {openDialog &&
                    <ShowForm 
                    type='dialog' 
                    onClose={()=>setOpenDialog(false)}
                    onSave={newData=>{

                        let max = 0;
                        data.forEach(item => {
                        if (item.id > max) {
                            max = item.id;
                        }
                        });
        
                        const createDate = {...newData,parentId:rowData.id,id:max+1}
                        console.log("add a row as node",createDate);

                        const mdata = [...data,createDate];
                        setData(mdata);
                    }}
                    />
                }
            </Grid>            
            <Grid item xs={12} md={3}>
                <Button variant="contained" color="primary"
                disabled={!rowData ? true:rowData.type!=='TEC'}
                onClick={()=>{     
                    alert(rowData.description)                               
                }}>TEC</Button>
            </Grid>  
            <Grid item xs={12} md={3}>
            <Button variant="contained" 
            color="primary" 
                    disabled={!rowData ? true:rowData.type!=='PROD'}
                    onClick={()=>{   
                        alert(rowData.description)                                 
                }}>PROD</Button>
            </Grid>        
            <Grid item xs={12} md={3}>
            <Button variant="contained" color="primary" 
                    disabled={!rowData ? true:rowData.type!=='HR'}
                    onClick={()=>{   
                        alert(rowData.description)                                 
                }}>HR</Button>
            </Grid>        
            <Grid item xs={12} md={3}>
            <Button variant="contained" color="primary" 
                disabled={!rowData ? true:rowData.type!=='ASSETINLOCATION'}
                onClick={()=>{  
                    alert(rowData.description)                 
                }}>ASSETINLOCATION</Button>
            </Grid>        
        </Grid>

    )
}
