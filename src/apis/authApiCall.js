import axios from "axios";
const DomainName = "https://unicar-server.vercel.app";
const dbUser = JSON.parse(localStorage.getItem("userInfo"));
export const createUserInDb = async (user) => {
  try {
    const { data } = await axios.post(`${DomainName}/api/v1/users/signin`, {
      userName: user.userName,
      userEmail: user.userEmail,
      userRole: user.userRole,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    throw new Error(error.message);
  }
};

export const loginUserInDb = async (email) => {
  try {
    const { data } = await axios.post(`${DomainName}/api/v1/users/login`, {
      userEmail: email,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAllUser = async (role) => {
  try {
    const { data } = await axios.get(
      `${DomainName}/api/v1/users?userRole=${role}`,
      {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + dbUser?.token,
        },
      }
    );

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// UPDATE USER

export const updateUser = async (userId) => {
  try {
    const { data } = await axios.patch(
      `${DomainName}/api/v1/users/${userId}`,
      {},
      {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + dbUser?.token,
        },
      }
    );

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteUser = async (userId) => {
  try {
    const { data } = await axios.delete(
      `${DomainName}/api/v1/users/${userId}`,
      {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + dbUser?.token,
        },
      }
    );

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
