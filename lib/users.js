import axios from 'axios'

export async function getUserData(id) {
  const data = await axios.get(`https://60d8dd12eec56d0017477508.mockapi.io/api/profiles/${id}`);
  console.log(data.status)
  if (data.status === '404') {
    console.log('HEREHEREHERHEHEHEHE')
    return 'error'
  } else {
    return data.data
  }
}

export async function getAllUserIds() {
  const users = await axios.get('https://60d8dd12eec56d0017477508.mockapi.io/api/profiles')

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: '1'
  //     }
  //   },
  //   {
  //     params: {
  //       id: '2'
  //     }
  //   }
  // ]
  return users.data.map(user => {
    return {
      params: {
        id: user.id
      }
    }
  })
}