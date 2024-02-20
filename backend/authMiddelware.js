const authenticateSession = (req, res, next) => {
  const user = req.session.User;

  if (user?.email) {
    next();
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default authenticateSession;
