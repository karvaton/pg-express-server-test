
import Router from "express";
import users from "../controllers/users.js";
import userData from "../controllers/layers.js";

const router = new Router();

router.get("/users", users.getAll);
router.get("/users/:id", users.getOne);
router.post("/users/:id", users.create);
router.delete("/users/:id", users.remove);

router.get("/users/:id/layers", userData.getAll);
router.post("/users/:id/layers", userData.create);
router.delete("/users/:id/layers/:lid", userData.remove);

export default router;