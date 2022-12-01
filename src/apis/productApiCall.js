import axios from "axios";
const DomainName = "https://unicar-server.vercel.app";

const dbUser = JSON.parse(localStorage.getItem("userInfo"));
// CREATE A NEW PRODUCT
export const createNewProduct = async (productData) => {
  try {
    const { data } = await axios.post(
      `${DomainName}/api/v1/products`,
      {
        name: productData.name,
        image: productData.image,
        description: productData.description,
        originalPrice: productData.originalPrice * 1,
        newPrice: productData.newPrice * 1,
        purchaseYear: productData.purchaseYear * 1,
        usedYear: productData.usedYear * 1,
        phoneNumber: productData.phoneNumber,
        location: productData.location,
        category: productData.category,
        conditionType: productData.conditionType,
        sellerInfo: dbUser?.user._id,
      },
      {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + dbUser.token,
        },
      }
    );
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// GET SELLER PRODUCTS

export const getSellerProducts = async () => {
  try {
    const { data } = await axios.get(
      `${DomainName}/api/v1/products?sellerId=${dbUser?.user._id}`,
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

// GET CATEGORY PRODUCTS

export const getProductByCategory = async (category) => {
  try {
    const { data } = await axios.get(
      `${DomainName}/api/v1/products?category=${category}`,
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

// GET ADVERTISED PRODUCTS

export const getAdvertisedProduct = async () => {
  try {
    const { data } = await axios.get(
      `${DomainName}/api/v1/products?isSold=false&isAdvertised=true`
    );

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// MAKE ADVERTISEMENT PRODUCT

export const updateProduct = async (productId, updatedKey) => {
  try {
    const { data } = await axios.patch(
      `${DomainName}/api/v1/products/${productId}`,
      { ...updatedKey },
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
// MAKE ADVERTISEMENT PRODUCT

export const deleteSellerProduct = async (productId) => {
  try {
    const { data } = await axios.delete(
      `${DomainName}/api/v1/products/${productId}`,
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

// CREATE NEW ORDER

export const createNewOrder = async (orderInfo) => {
  try {
    const { data } = await axios.post(
      `${DomainName}/api/v1/orders`,
      {
        ...orderInfo,
        buyerInfo: dbUser?.user._id,
      },
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

// PRODUCT SOLD STUTUS

export const getOrders = async () => {
  try {
    const { data } = await axios.get(
      `${DomainName}/api/v1/orders?userId=${dbUser?.user?._id}`,
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

// PRODUCT SOLD STUTUS

export const updateOrder = async (orderId, transitionId) => {
  try {
    const { data } = await axios.patch(
      `${DomainName}/api/v1/orders/${orderId}`,
      {
        transitionId,
      },
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

// GET CLIENT SECRET
export const getClientSecret = async (price) => {
  try {
    const { data } = await axios.post(
      `${DomainName}/api/v1/orders/payment`,
      { price },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${dbUser.token}`,
        },
      }
    );

    return data.clientSecret;
  } catch (error) {
    throw new Error(error.message);
  }
};
