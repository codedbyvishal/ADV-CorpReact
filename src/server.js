// Settimeout
// Promise
// HTTP status codes

import { uuidv4 } from "./utils";
import { PRODUCTS_LIST } from "./db";

const delay = 3000;

export function register(profile) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      profile.userId = uuidv4();

      localStorage.setItem("profile", JSON.stringify(profile));

      return resolve({
        status: 200,
        data: {
          message: "Your profile has been created successfully.",
          profile: {
            email: profile.email,
            username: profile.username,
            userId: profile.userId,
          },
        },
      });
    }, delay);
  });
}

export function login(profile) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const _profile = JSON.parse(localStorage.getItem("profile"));

      if (
        _profile.username === profile.username &&
        _profile.password === profile.password
      ) {
        return resolve({
          status: 200,
          data: {
            message: "You are logged in successfully.",
            profile: {
              email: _profile.email,
              username: _profile.username,
              userId: _profile.userId,
            },
          },
        });
      }

      return reject({
        status: 401,
        data: {
          message: "Your username and/or password is wrong.",
          profile: {},
        },
      });
    }, delay);
  });
}

export function forgotPassword(profile) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const _profile = JSON.parse(localStorage.getItem("profile"));

      return resolve({
        status: 200,
        data: {
          message:
            "Your temporary profile password is sent to your registered email.",
          profile: {
            email: _profile.email,
            username: _profile.username,
            userId: _profile.userId,
            password: _profile.password,
          },
        },
      });
    }, delay);
  });
}

export function getSlpData(query) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let productList = PRODUCTS_LIST;

      if (query) {
        const _query = query.toLowerCase();

        productList = PRODUCTS_LIST.filter((product) => {
          const { name, tags, categories } = product;
          const _tags = tags.join(" ");
          const _categories = categories.join(" ");
          const _queryStr = `${name} ${_tags} ${_categories}`.toLowerCase();

          return _queryStr.indexOf(_query) > -1;
        });
      }

      return resolve({
        status: 200,
        data: productList,
      });
    }, delay);
  });
}