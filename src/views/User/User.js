import { useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component"
import Navbar from "../../components/Navbar"
import API from "../../utils/API";

const User = () => {

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
  ]);

  const getData = () => {
    API.get('users/')
    .then(res => {
      setData(res.data)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <Navbar />
      <div className='content-users'>
        <DataTable
            title="Movie List"
            columns={columns}
            data={data} />
      </div>
    </div>
  );
}

export default User;