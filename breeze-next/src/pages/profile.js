import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import { useState, useEffect } from 'react' 

const Profile = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:8000/profile')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Profile
                </h2>
            }>
      <Head>
          <title>Laravel - Profile</title>
      </Head>

      <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                  <div className="p-6 bg-white border-b border-gray-200">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Full Name</th>
                          <th>Email</th>
                          <th>Level</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                      {data.map((user) => (
                        <tr>
                          <td>{user.id}</td>
                          <td>
                            <p>{user.firstname} {user.lastname}</p>
                          </td>
                          <td>
                            <p>{user.email}</p>
                          </td>
                          <td>
                            <p>{user.level}</p>
                          </td>
                          <td>action</td>
                        </tr>
                      ))}
                      {
                      /*
                        <tr>
                          <td>{ data[0].id }</td>
                          <td>
                            {data[0].firstname ? data[0].firstname : 'full name'} &nbsp;
                            {data[0].lastname ? data[0].lastname : 'full name'}
                          </td>
                          <td>{data[0].email ? data[0].email : 'email'}</td>
                          <td>
                              View Edit Delete
                          </td>
                        </tr>
                      */
                      }
                      </tbody>
                    </table>
                  </div>
              </div>
          </div>
      </div>
      
    </AppLayout>
  );
};

export default Profile

/*

const Profile = ({ getUser }) => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Profile
                </h2>
            }>

            <Head>
                <title>Laravel - Profile</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            {getUser}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Profile
*/