import { useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component"
import { connect } from "react-redux";
import Navbar from "../../components/Navbar"
import store from "../../redux/store";
import API from "../../utils/API";
import { getUsers } from "../../utils/services";
import { getListUsers } from '../../redux/actions/usersActions'
import './User.sass'
import { Link } from "react-router-dom";

const User = (props) => {

  const [data, setData] = useState([])

  const columns = useMemo(() => [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
    },
    {
      name: 'Username',
      selector: 'username',
      sortable: true,
      // omit: hideDirector,
    },
    {
      name: 'Email',
      selector: 'email',
      sortable: true,
    },
    {
      // name: 'Op',
      // selector: 'email',
      // sortable: true,
      cell: row => <Link to={`users/${row.id}`}><botton>Check</botton></Link>
    },

  ]);

  const getData = async() => {
    await props.dispatch(
      getListUsers()
    )
    // setData(() => )
    // API.get('users/')
    // .then(res => {
    //   setData(res.data)
    // })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    
    <div>
      {/* {console.log(props)} */}
      <Navbar />
      <div className='content-users'>
        <div className='section-title'>
          <span className='title'>USERS LIST</span>
        </div>
        <DataTable
          // style={{padding: '10px'}}
          noHeader
          columns={columns}
          data={props.users.users.data} 
          pagination
        />
      </div>
    </div>
  );
}

export default connect((state) => {
  return state
})(User);