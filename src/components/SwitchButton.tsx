export default function SwitchButton( { onChange }: any ) {
  
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" 
        onChange={onChange}  
        value="" 
        className="sr-only peer"/>
        <div className="peer ring-2 ring-gray-900 dark:ring-gray-400 bg-gradient-to-r from-yellow-100 to-yellow-400 rounded-xl outline-none duration-300 after:duration-500 w-12 h-6 shadow-inner peer-checked:bg-gradient-to-r peer-checked:from-gray-900 peer-checked:to-gray-500 shadow-gray-900 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-900 dark:peer-focus:ring-gray-400   after:content-[''] after:rounded-2xl after:absolute after:outline-none after:h-8 after:w-8 after:bg-gray-50 after:-top-1 after:-left-1 after:flex after:justify-center after:items-center after:border-4 after:border-gray-900 dark:after:border-gray-500 peer-checked:after:translate-x-6">
      </div>
    </label>
  );
}
