import { useState } from 'react';
import { useProductStore } from '../stores/Products.store';
import ProductService from '../service/ProductService';


export default function AddingProduct() {
  
  const [id, setId] = useState("");
  const [quantity, setQuantity] = useState("");

  const addProduct = useProductStore( ( state ) => state.addProduct );
  const findProduct = useProductStore( ( state ) => state.findProduct );
  const updateProduct = useProductStore( ( state ) => state.updateProduct );
  

  const onIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if ( !isNaN( Number( value ) ) ) {
      setId( value ); 
    }
  }
  
  const onQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if ( !isNaN( Number( value ) ) ) {
      setQuantity( value ); 
    }
  }

  const handleButtonClick = async () => {
    if (id && quantity) {
      try {
        const newProduct = await ProductService.getProduct(id);
        const findProd = await findProduct(newProduct.id);

        if( findProd ) {
          updateProduct(newProduct.id, parseInt(quantity));
        } else {
          addProduct({ ...newProduct, quantity: parseInt(quantity) });
        }


        setId('');
        setQuantity('');
      } catch (error) {
        alert('No existe el producto con ese ID.');
      }
    } else {
      alert('Por favor, ingresa el ID y la cantidad.');
    }
  }

  return (
    <div className="flex justify-between items-center px-5 border-[3px] border-gray-300 dark:border-gray-400 p-3 rounded-md">
      <div>
        <h1 className="font-medium">Agregar los productos al carro de compra</h1>
        <div className="flex gap-4 pt-2">
          <input type="text" value={quantity} placeholder="Cantidad" className="border-[3px] border-gray-300 dark:text-slate-900 dark:border-gray-400 p-1 max-w-24 rounded-md" onChange={ onQuantityChange } />
          <input type="text" value={id} placeholder="ID del Producto" className="border-[3px] border-gray-300 dark:text-slate-900 dark:border-gray-400 p-1 rounded-md" onChange={ onIdChange }/>
        </div>
      </div>
      <div className="flex justify-center items-center h-full ">
        <button className="border-[3px] border-gray-300 dark:border-gray-400 p-2 rounded-md" onClick={ handleButtonClick }>Agregar</button>
      </div>
    </div>
  )
}
