import axios from 'axios'

const APP_URL = process.env.REACT_APP_API_BASE_URL

export const createItemApi = async (data) => {
    const xhr = await axios.request({
        method: 'post',
        url: `${APP_URL}/v1.8/user/create-collectible`,
        headers:{
            authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjVlNzIyZWNiZWRiMTA2NDg1MGQ5M2YiLCJ3YWxsZXRfYWRkcmVzcyI6IjB4MmFmYjZhY2ZiOGU4NGI5M2RlMmI5ZWViZjExM2NlNjNkNWYxZmI2NSIsImlzU3VwZXJBZG1pbiI6ZmFsc2UsInJvbGUiOiJ1c2VyIiwibmV0d29ya19pZCI6IjEiLCJpc1ByZXNhbGVBZG1pbiI6ZmFsc2UsImlzTGxjQWRtaW4iOmZhbHNlLCJpc1N0YWtlQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzA1ODEwNzMsImV4cCI6MTY3MzE3MzA3M30.UFRLbZdRrNRvqTLv5pcTa88d6-j1SZgk9fnjZJzRHqU'
        },
        data,
    })
    return xhr
  }