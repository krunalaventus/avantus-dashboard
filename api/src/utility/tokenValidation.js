import jwt from 'jsonwebtoken';
import tokenKey from "../constant/token"

// it will validate all the apis which required authentication
export const checkToken = async(req, res, next) => {
  const token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  if (token) {
    if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }
    jwt.verify(token, tokenKey.name, (err, decoded) => {
      if (err) {
        return res.json({
            statusCode:500,
            success: false,
            message: 'Token is not valid'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({
        statusCode:500,
        success: false,
        message: 'Auth token is not supplied'
    });
  }
};

// it will validate all the apis which not required authentication
export const checkSecretToken = async(req, res, next) => {
  const token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  if (token) {
    if(token == tokenKey.secretToken){
      next();
    }else{
      return res.json({
          statusCode:500,
          success: false,
          message: 'Token is not valid'
      });
    }
  } else {
    return res.json({
        statusCode:500,
        success: false,
        message: 'Auth token is not supplied'
    });
  }
};