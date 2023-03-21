import React, { useEffect, useState } from 'react'

export default function User() {

  const [users, setUser] = useState<any[]>([]);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => { setUser(data) })
      .catch(() => setError("Error while Fetching users"));
  }, [])

  return (
    <>
      <h1>Users</h1>
      {error}
      {
        users && users.map((user: any) =>
          <div role="listitem" key={user.id}>
            {user.name}
          </div>
        )
      }

    </>
  )
}
