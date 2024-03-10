import logo from './logo.svg';
import './App.css';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { get_ids } from './http/get_ids';
import { useEffect, useState } from 'react';
import { get_items } from './http/get_items';
function App() {
  const [products, setProducts] = useState([]);
  const [ids, setIds] = useState([])
  useEffect(()=>{get_ids().then(data=>get_items(data.data.result)).then(data=>setProducts(data.data.result))
 
  
  },[])
  console.log("hello")
  const rows =[]
  if (rows.length===0){
  products.map((product)=>
   rows.push( { id: product.id, productName: product.product, brandName: product.brand, price: product.price })
  )}
  console.log(ids)
 
  console.log(products)
  const columns = [
    { field: 'id', headerName: 'ID', width: 300 },
    { field: 'productName', headerName: 'Product', width: 300 },
    { field: 'brandName', headerName: 'Brand', width: 200 },
    { field: 'price', headerName: 'Price', width: 70 }
  
  ];

  return (
    <div className="App">
           <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        
      />
      
    </div>
  );
}

export default App;
