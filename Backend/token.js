const jwt = require('jsonwebtoken')
const secretKey = '1qaz@WSX3edc'

function token(payload) {
  return jwt.sign({ email: payload }, secretKey, { expiresIn: '30s' })
}

function verify(token) {
  try {
    jwt.verify(token, secretKey)
    return token
  } catch (err) {
    return err.message
  }
}

function generate_token(req, res, next) {
  const email = req.params.email;
  if (!email) return res.status(400).json({ status: 400, error: 'Email is required' });
  const generatedToken = token(email);
  res.status(200).json({ status: 200, token: generatedToken });
}

function verify_token(req, res, next) {
  const token = req.query.token;
  if (!token) return res.status(400).json({ status: 400, error: 'Token is required' });
  const verificationResult = verify(token);
  res.status(200).json({ status: 200, token: verificationResult });
}

module.exports = { token, verify, generate_token, verify_token }