import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Table from './components/common/Table'

import './components/common/table.css'

function App() {
    
  const columns = [
    { fieldname: 'name', headertext: 'Name', datatype: 'string', style: { textAlign: 'left' }  },
    { fieldname: 'age', headertext: 'Age', datatype: 'number', style: { textAlign: 'right' } },
    { fieldname: 'is_manager', headertext: 'Manager', datatype: 'boolean', style: { textAlign: 'center' } }, //, format = (value) => (value ? <>&#10003;</> : <>&#935;</>)
    { fieldname: 'start_date', headertext: 'Start Date', datatype: 'date', style: { textAlign: 'right' } },
    { fieldname: 'view', commandtext: 'View', command: (event) => { alert(event.target.value) } },
]

const rows = [
    { id: 1, name: 'Liz Lemon', age: 36, is_manager: true, start_date: '02-28-1999' },
    { id: 2, name: 'Jack Donaghy', age: 40, is_manager: true, start_date: '03-05-1997' },
    { id: 3, name: 'Tracy Morgan', age: 39, is_manager: false, start_date: '07-12-2002' },
    { id: 4, name: 'Jenna Maroney', age: 40, is_manager: false, start_date: '02-28-1999' },
    { id: 5, name: 'Kenneth Parcell', age: Infinity, is_manager: false, start_date: '01-01-1970' },
    { id: 6, name: 'Pete Hornberger', age: 42, is_manager: true, start_date: '04-01-2000' },
    { id: 7, name: 'Frank Rossitano', age: 36, is_manager: false, start_date: '06-09-2004' },
    { id: 8, name: null, age: null, is_manager: null, start_date: null },
    { id: 9, name: 'Liz Lemon', age: 36, is_manager: true, start_date: '02-28-1999' },
    { id: 10, name: 'Jack Donaghy', age: 40, is_manager: true, start_date: '03-05-1997' },
    { id: 11, name: 'Tracy Morgan', age: 39, is_manager: false, start_date: '07-12-2002' },
    { id: 12, name: 'Jenna Maroney', age: 40, is_manager: false, start_date: '02-28-1999' },
    { id: 13, name: 'Kenneth Parcell', age: Infinity, is_manager: false, start_date: '01-01-1970' },
    { id: 15, name: 'Pete Hornberger', age: 42, is_manager: true, start_date: '04-01-2000' },
    { id: 16, name: 'Frank Rossitano', age: 36, is_manager: false, start_date: '06-09-2004' },
    { id: 17, name: null, age: null, is_manager: null, start_date: null },
    { id: 18, name: 'Liz Lemon', age: 36, is_manager: true, start_date: '02-28-1999' },
    { id: 19, name: 'Jack Donaghy', age: 40, is_manager: true, start_date: '03-05-1997' },
    { id: 20, name: 'Tracy Morgan', age: 39, is_manager: false, start_date: '07-12-2002' },
    { id: 21, name: 'Jenna Maroney', age: 40, is_manager: false, start_date: '02-28-1999' },
    { id: 22, name: 'Kenneth Parcell', age: Infinity, is_manager: false, start_date: '01-01-1970' },
    { id: 23, name: 'Pete Hornberger', age: 42, is_manager: true, start_date: '04-01-2000' },
    { id: 24, name: 'Frank Rossitano', age: 36, is_manager: false, start_date: '06-09-2004' },
    { id: 25, name: null, age: null, is_manager: null, start_date: null },
    { id: 26, name: 'Liz Lemon', age: 36, is_manager: true, start_date: '02-28-1999' },
    { id: 27, name: 'Jack Donaghy', age: 40, is_manager: true, start_date: '03-05-1997' },
    { id: 28, name: 'Tracy Morgan', age: 39, is_manager: false, start_date: '07-12-2002' },
    //{ id: 29, name: 'Jenna Maroney', age: 40, is_manager: false, start_date: '02-28-1999' },
    //{ id: 30, name: 'Kenneth Parcell', age: Infinity, is_manager: false, start_date: '01-01-1970' },
    //{ id: 31, name: 'Pete Hornberger', age: 42, is_manager: true, start_date: '04-01-2000' },
    //{ id: 32, name: 'Frank Rossitano', age: 36, is_manager: false, start_date: '06-09-2004' },
    //{ id: 33, name: null, age: null, is_manager: null, start_date: null },
    //{ id: 34, name: 'Liz Lemon', age: 36, is_manager: true, start_date: '02-28-1999' },
    //{ id: 35, name: 'Jack Donaghy', age: 40, is_manager: true, start_date: '03-05-1997' },
    //{ id: 36, name: 'Tracy Morgan', age: 39, is_manager: false, start_date: '07-12-2002' },
    //{ id: 37, name: 'Jenna Maroney', age: 40, is_manager: false, start_date: '02-28-1999' },
    //{ id: 38, name: 'Kenneth Parcell', age: Infinity, is_manager: false, start_date: '01-01-1970' },
    //{ id: 39, name: 'Pete Hornberger', age: 42, is_manager: true, start_date: '04-01-2000' },
    //{ id: 40, name: 'Frank Rossitano', age: 36, is_manager: false, start_date: '06-09-2004' },
    //{ id: 41, name: null, age: null, is_manager: null, start_date: null },
    //{ id: 42, name: 'Liz Lemon', age: 36, is_manager: true, start_date: '02-28-1999' },
    //{ id: 43, name: 'Jack Donaghy', age: 40, is_manager: true, start_date: '03-05-1997' },
    //{ id: 44, name: 'Tracy Morgan', age: 39, is_manager: false, start_date: '07-12-2002' },
    //{ id: 45, name: 'Jenna Maroney', age: 40, is_manager: false, start_date: '02-28-1999' },
    //{ id: 46, name: 'Kenneth Parcell', age: Infinity, is_manager: false, start_date: '01-01-1970' },
    //{ id: 47, name: 'Pete Hornberger', age: 42, is_manager: true, start_date: '04-01-2000' },
    //{ id: 48, name: 'Frank Rossitano', age: 36, is_manager: false, start_date: '06-09-2004' },
    //{ id: 49, name: null, age: null, is_manager: null, start_date: null },
]

  return (
      <div>
          <Table rows={rows} columns={columns} />
      </div>
  );
}

export default App;
