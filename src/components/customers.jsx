import React from "react";

import {getMovies} from '../services/customerservice';
class Customers extends React.Component {

  state = {
    customer: []
  };

 
  async componentDidMount() {
    //pending---then resolve reject
    // const promise=axios.get('https://jsonplaceholder.typicode.com/posts');
    //using await so we use async 
    // const response=await promise;
  
    const {data:customer}= await getMovies();
    this.setState({customer});
  }
  render() {
    return (
      <React.Fragment>
     
     
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customer.map(post => (
              <tr key={post.name}>
                <td>{post.title}</td>
            
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
  
}
 
export default Customers;


