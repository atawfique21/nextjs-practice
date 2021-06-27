import axios from 'axios'

export async function getUserData(id) {
  const data = await axios.get(`https://60d8dd12eec56d0017477508.mockapi.io/api/profiles/${id}`)
    .catch(err => {
      return false
    })
    // .then(response => {
    //   console.log(data.data)
    //   return data.data
    // })
    
  return data.data
  // if (data.status === '404') {
  //   console.log('HEREHEREHERHEHEHEHE')
  //   return false
  // } else {
  //   return data.data
  // }
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