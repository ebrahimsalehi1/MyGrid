import React from 'react'
import MaterialTable from 'material-table'
import { forwardRef } from 'react';

import dataInternal from './db.json';

import AddBox from '@material-ui/icons/AddBox';
import Add from '@material-ui/icons/Add';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Button from '@material-ui/core/Button';

export default function BasicTreeData(props) {

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

  const {icons,columns,data,actions,editable,title,endpoint,
    url,gridLoad,
    formItemsAdd,formItemsEdit,
    options,parentChildData,
} = props;

  const [data,setData] = React.useState(props.data ? props.data : dataInternal);

  console.log('BasicTreeData is rendering',selection);

  // onRowAdd:newData=>
  // new Promise((resolve,reject)=>{
  //   console.log("add data",newData);
  //   //setData([...data,newData]);
  //   resolve();
  // }),

    const editable={
      onRowUpdate:()=>{},
      onRowDelete:()=>{}};

    return (
    <div>
        
      Number of data : {data ? data.length+1 : "0"}

      <MaterialTable
        title="Basic Tree Data Preview"
        icons={tableIcons}
        data={data}
        columns={[
          { title: 'description', field: 'description' },
          { title: 'code', field: 'code' },
          { title: 'type', field: 'type' },
        ]}
        parentChildData={(row, rows) => rows.find(a => a.id === row.parentId)}
        options={{
          selection: selection,
          // rowStyle: {
          //   backgroundColor: '#EEE',
          // }
        }}
        editable={editable}
        actions={
          [
            //{isFreeAction:true,icon:()=>(<Button variant={"contained"} color={"primary"}>ایجاد</Button>),tooltip:'ایجاد',onClick:(event,rowData)=>{console.log('onclick');}},
            {icon:Add,tooltip:'Add',onClick:(event,rowData)=>  
                                                            new Promise((resolve,reject)=>{
                                                              console.log("add data",rowData);
                                                              //setData([...data,newData]);
                                                              resolve();
                                                            }),
            },
            //{icon:DeleteOutline,tooltip:'حذف',onClick:(event,rowData)=>{}}
          ]      
        }
        onTreeExpandChange={(event, nodes)=>{
          console.log('onTreeExpandChange',nodes,nodes.length);
        }}
      />
    </div>
    )
  }
  