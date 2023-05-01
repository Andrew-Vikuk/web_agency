import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [catalogData, setCatalogData] = useState([]);
  const [catalogFormData, setCatalogFormData] = useState({
    Title: '',
    ProjectType: '',
    PageCount: '',
    Price: ''
  });

  const [orderData, setOrderData] = useState([]);
  const [orderFormData, setOrderFormData] = useState({
    UserId: '',
    SiteId: '',
    EstimateDays: ''
  });

  const [userData, setUserData] = useState([]);
  const [userFormData, setUserFormData] = useState({
    Name: '',
    Surname: '',
    PhoneNumber: '',
    Email: '',
    OrderId: '',
  });

  const ShowAllCatalog = () => {
    axios.get('http://localhost:3000/catalog')
      .then(response => {
        setCatalogData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleCatalogInputChange = (event) => {
    setCatalogFormData({
      ...catalogFormData,
      [event.target.name]: event.target.value
    });
  }

  const handleCatalogSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/catalog', catalogFormData)
      .then(response => {
        console.log(response.data);
        ShowAllCatalog();
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleCatalogDelete = (id) => {
    axios.delete(`http://localhost:3000/catalog/${id}`)
      .then(response => {
        console.log(response.data);
        ShowAllCatalog();
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  const ShowAllOrders = () => {
    axios.get('http://localhost:3000/orders')
      .then(response => {
        setOrderData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleOrderInputChange = (event) => {
    setOrderFormData({
      ...orderFormData,
      [event.target.name]: event.target.value
    });
  }

  const handleOrderSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/orders', orderFormData)
      .then(response => {
        console.log(response.data);
        ShowAllOrders();
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleOrderDelete = (id) => {
    axios.delete(`http://localhost:3000/orders/${id}`)
      .then(response => {
        console.log(response.data);
        ShowAllOrders();
      })
      .catch(error => {
        console.log(error);
      });
  }


  const ShowAllUsers = () => {
    axios.get('http://localhost:3000/user')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleUserInputChange = (event) => {
    setUserFormData({
      ...userFormData,
      [event.target.name]: event.target.value
    });
  }

  const handleUserSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/user', userFormData)
      .then(response => {
        console.log(response.data);
        ShowAllUsers();
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleUserDelete = (id) => {
    axios.delete(`http://localhost:3000/user/${id}`)
      .then(response => {
        console.log(response.data);
        ShowAllUsers();
      })
      .catch(error => {
        console.log(error);
      });
  }


  const [catalogId, setCatalogId] = useState("");
  const [users, setUsers] = useState([]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3000/all/${catalogId}`);
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setCatalogId(event.target.value);
  };




  useEffect(() => {
    ShowAllCatalog();
    ShowAllOrders();
    ShowAllUsers();
  }, []);

  return (
    <div className="App">
      <div className='catalog'>

      <h2>CATALOG</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Project Type</th>
            <th>Page Count</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {catalogData.map(item => (
            <tr key={item.id}>
              <td>{item.Title}</td>
              <td>{item.ProjectType}</td>
              <td>{item.PageCount}</td>
              <td>{item.Price}</td>
              <td><button className='delete_btn' onClick={() => handleCatalogDelete(item.id)}>X</button></td>
            </tr>))}
</tbody>
</table>

<form onSubmit={handleCatalogSubmit}>
    <label>
      Title:
      <input type="text" name="Title" value={catalogFormData.Title} onChange={handleCatalogInputChange} />
    </label>
    <label>
      Project Type:
      <input type="text" name="ProjectType" value={catalogFormData.ProjectType} onChange={handleCatalogInputChange} />
    </label>
    <label>
      Page Count:
      <input type="number" name="PageCount" value={catalogFormData.PageCount} onChange={handleCatalogInputChange} />
    </label>
    <label>
      Price:
      <input type="number" name="Price" value={catalogFormData.Price} onChange={handleCatalogInputChange} />
    </label>
    <button type="submit">Add Item</button>
  </form>


</div>
<div>
<h2>ORDERS</h2>
  <table className="data-table">
    <thead>
      <tr>
        <th>User Id</th>
        <th>Site Id</th>
        <th>Estimate Days</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {orderData.map(item => (
        <tr key={item.id}>
          <td>{item.UserId}</td>
          <td>{item.SiteId}</td>
          <td>{item.EstimateDays}</td>
          <td><button className='delete_btn' onClick={() => handleOrderDelete(item.id)}>X</button></td>
        </tr>
      ))}
    </tbody>
  </table>



  <form onSubmit={handleOrderSubmit}>
    <label>
      User Id:
      <input type="number" name="UserId" value={orderFormData.UserId} onChange={handleOrderInputChange} />
    </label>
    <label>
      Site Id:
      <input type="number" name="SiteId" value={orderFormData.SiteId} onChange={handleOrderInputChange} />
    </label>
    <label>
      Estimate Days:
      <input type="number" name="EstimateDays" value={orderFormData.EstimateDays} onChange={handleOrderInputChange} />
    </label>
    <button type="submit">Place Order</button>
  </form>

  </div>


  <div>
<h2>USERS</h2>
  <table className="data-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Address</th>
        <th>PhoneNumber</th>
        <th>Email</th>
        <th>OrderId</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {userData.map(item => (
        <tr key={item.id}>
          <td>{item.Name}</td>
          <td>{item.Surname}</td>
          <td>{item.Address}</td>
          <td>{item.PhoneNumber}</td>
          <td>{item.Email}</td>
          <td>{item.OrderId}</td>
          <td><button className='delete_btn' onClick={() => handleUserDelete(item.id)}>X</button></td>
        </tr>
      ))}
    </tbody>
  </table>



  <form onSubmit={handleUserSubmit}>
    <label>
      Name:
      <input type="text" name="Name" value={userFormData.Name} onChange={handleUserInputChange} />
    </label>
    <label>
      Surname:
      <input type="text" name="Surname" value={userFormData.Surname} onChange={handleUserInputChange} />
    </label>
    <label>
      Address:
      <input type="text" name="Address" value={userFormData.Address} onChange={handleUserInputChange} />
    </label>
    <label>
      Phone Number:
      <input type="text" name="PhoneNumber" value={userFormData.PhoneNumber} onChange={handleUserInputChange} />
    </label>
    <label>
      Email:
      <input type="text" name="Email" value={userFormData.Email} onChange={handleUserInputChange} />
    </label>
    <label>
      Email:
      <input type="number" name="OrderId" value={userFormData.OrderId} onChange={handleUserInputChange} />
    </label>
    <button type="submit">Add User</button>
  </form>

  </div>
  <div>
      <form onSubmit={handleSubmit}>
        <label>
          Catalog ID:
          <input type="number" value={catalogId} onChange={handleChange} />
        </label>
        <button type="submit">Search</button>
      </form>
      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.Name}</td>
                <td>{user.Email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found.</p>
      )}
    </div>

</div>
);
}

export default App;






