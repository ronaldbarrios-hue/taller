import { Router } from "express";

export default function countryRoutes(controller) {

  const router = Router();

  router.post("/countries", (req, res) =>
    controller.create(req, res)
  );

  router.get("/countries", (req, res) =>
    controller.getAll(req, res)
  );

  return router;

}