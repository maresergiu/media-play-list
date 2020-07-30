import axios from "axios"

const logIn = async () => {
  let data = null
  await axios
    .get(process.env.REACT_APP_API_LOG_IN)
    .then((response) => {
      data = response.data
    })
    .catch((error) => {
      data = error
    })

  return data
}

const getHotList = async (musicStyle) => {
  let data = null

  await axios
    .get(`${process.env.REACT_APP_API_HOT_LIST}/${musicStyle}`)
    .then((response) => {
      data = response.data
    })
    .catch((error) => {
      data = error
    })

  return data
}

export default {
  logIn,
  getHotList,
}
