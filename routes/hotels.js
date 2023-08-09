import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", createHotel);

//UPDATE
router.put("/:id", updateHotel);

//DELETE
router.delete("/:id", deleteHotel);

//GET
router.get("/find/:id", getHotel);

//GET ALL
router.get("/", verifyToken, getHotels);
router.get("/countByCity", verifyToken, countByCity);
router.get("/countByType", verifyToken, countByType);
router.get("/room/:id", verifyToken, getHotelRooms);

export default router;
