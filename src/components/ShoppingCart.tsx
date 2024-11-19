import { useProductStore } from '../stores/Products.store'
import { Trash2 } from 'lucide-react';

export default function shoppingCart() {
  const productList = useProductStore( ( state ) => state.products );
  const removeProduct = useProductStore( ( state ) => state.removeProduct );
  const totalQuantity = useProductStore( ( state ) => state.totalQuantity );
  const totalPrice = useProductStore( ( state ) => state.totalPrice );
  const plusOneQuantity = useProductStore( ( state ) => state.plusOneQuantity );
  const minusOneQuantity = useProductStore( ( state ) => state.minusOneQuantity );

  console.log( productList );

  return (
    <div className="flex flex-col items-start gap-4 py-6 px-3 border-[3px] border-gray-300 dark:border-gray-400 rounded-md">
      <h1 className="font-medium">Carrito de compra</h1>
      
        <div className="flex flex-col gap-2 w-full ">
          { productList.length > 0 ?
              <div className="flex flex-col gap-2 w-full font-medium">
                 <div className="flex w-full px-4 gap-14 justify-between border-[3px] border-gray-300 dark:border-gray-400 p-2 ">
                 <p className="w-[10%]">Cantidad</p>
                 <p className="w-[30%]">Nombre</p>
                 <p className="w-[10%]">Precio Unidad</p>
                 <p className="w-[20%]">Precio Total</p>
                 <p className="w-[20%]">Imagen</p>
                 <p className="w-[12%]">Quitar Producto</p>
              </div>
              <div className="flex flex-col gap-2 w-full overflow-y-scroll max-h-[350px] font-normal">
                { productList.map(( product ) => (
                  <div key={ product.id } className="flex w-full justify-between items-center border-[3px] border-gray-300 dark:border-gray-400 p-2 gap-14">
                    <div className="w-[10%] pl-10 flex gap-3 text-xl">
                      <button onClick={ () => minusOneQuantity( product.id ) } className=" rounded-lg flex hover:text-gray-300 justify-center">-</button>
                      <p> { product.quantity }</p>
                      <button onClick={ () => plusOneQuantity( product.id ) } className=" rounded-lg flex hover:text-gray-300 justify-center">+</button>
                    </div>
                    <p className="w-[30%]">{ product.title }</p>
                    <p className="w-[10%]">${ product.price }</p>
                    <p className="w-[20%]">${ product.price * product.quantity }</p>
                    <div className="w-[20%]">
                      <img src={ product.image } className="w-[100px] h-[100px] p-2 border-[3px] border-gray-300 dark:border-gray-400"/>
                    </div>
                    <button onClick={ () => removeProduct( product ) }  className=" bg-red-300 p-3 rounded-lg w-[10%] flex hover:bg-red-200 justify-center "><Trash2 size={25} color="#f2f2f2" strokeWidth={2}/></button>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2 w-full">
                 <div className="flex w-full px-4 gap-14 justify-between border-[3px] border-gray-300 dark:border-gray-400 p-2 ">
                 <p className="w-[50%]">Cantidad Productos: {totalQuantity()}</p>
                 <p className="w-[50%]">Precio Compra Total: {totalPrice()}</p>
                </div>
              </div>
          </div>
          : (
              <p className="text-center w-[80%]">No hay productos en el carro aun, prueba agregando arriba su id y la cantidad que deseas ingresar</p>
            )
          }
      </div>
    </div>
  )
}
