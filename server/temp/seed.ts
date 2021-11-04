require("dotenv").config();

import { ObjectId } from 'mongodb';
import { connectDatabase } from "../src/database";
import { Listing } from "../src/lib/types";

const seed = async () => {
  try {
    console.log("[seed] : running...");

    const db = await connectDatabase();

    const listings: Listing[] = [
      {
        _id: new ObjectId(),
        title:
            "Видовая 2-комнатная квартира с раздельными комнатами на 21 этаже",
        image:
            "https://res.cloudinary.com/flatfast/image/upload/v1635855075/bbca2b48391f866a4c29d86141f0b2e2_gprtuj.jpg",
        address: "Бульвар Леси Украинки 7б, Київ(Печерський)",
        price: 1250,
        numOfGuests: 4,
        numOfBeds: 2,
        numOfBaths: 1,
        rating: 3
      },
      {
        _id: new ObjectId(),
        title: "Пропоную вишукану квартиру в престижному будинку з підземним паркінгом",
        image:
            "https://res.cloudinary.com/flatfast/image/upload/v1635855148/1714057264399004_lu6wnu.jpg",
        address:
            "Леси Украинки бульв., 7-б, Печерский р-н, Киев",
        price: 1300,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 1,
        rating: 4
      },
      {
        _id: new ObjectId(),
        title:
            "Довгосрокова аренда, Лесі Українки бул., 7б, 7-й поверх",
        image:
            "https://res.cloudinary.com/flatfast/image/upload/v1635855257/image__13__ufycvh.jpg",
        address: "Бульвар Леси Украинки 7б, Київ(Печерський)",
        price: 1300,
        numOfGuests: 4,
        numOfBeds: 3,
        numOfBaths: 2,
        rating: 4
      },
      {
        _id: new ObjectId(),
        title:
            "Аренда квартиры 3-х комнатной. в Київ, Лесі Українки бул., 7б",
        image:
            "https://res.cloudinary.com/flatfast/image/upload/v1635855558/b09fa001081a9569fd70fce53e99825e_q72xcs.jpg",
        address: "Бульвар Леси Украинки 7б, Київ(Печерський)",
        price: 1300,
        numOfGuests: 6,
        numOfBeds: 3,
        numOfBaths: 2,
        rating: 4
      }
    ];

    for (const listing of listings) {
      await db.listings.insertOne(listing)
    }


    console.log("[seed] : completed");
  } catch (error) {
    throw new Error('failed to seed database');
  }
};

seed();
