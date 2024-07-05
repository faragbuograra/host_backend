import { NextFunction, Request, Response } from "express";
import path from "path";
import { UPLOADS_PATH } from "../../config";
import Reservations from "./reservations.model";
import { unlink } from "node:fs/promises";
import { UtilDatabase } from "../../Utils/finder";

export const AdminReservationsController = {
  //index
  index: async (req: Request, res: Response, next: NextFunction) => {
    if (req.user.role == "admin" && req.user.Reservations == "admin") {
      let query = Reservations.query();
      return await UtilDatabase.finder(Reservations, req.query, query)

        .then((results) => res.json(results))
        .catch((err) => next(err));
    } else {
      let query = Reservations.query().where("status", "true");
      return await UtilDatabase.finder(Reservations, req.query, query)

        .then((results) => res.json(results))
        .catch((err) => next(err));
    }
  },
  show: async (req: Request, res: Response, next: NextFunction) => {
    let query = Reservations.query()
      .findById(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => next(err));
  },
  store: async (req: Request, res: Response, next: NextFunction) => {
    var data = req.body;
    console.log(data);
    data.user_id = req.user.id
    const trx = await Reservations.startTransaction();

    try {
      await Reservations.query(trx)
        .insert(data)
        .then((result) => res.json(result));

      await trx.commit();
  
    } catch (err) {
      // Delete file

      await trx.rollback();
      return next(err);
    }
  },

  /**
   * ---------------------------------------------------------------------
   * Update an existing instance of a model
   * ---------------------------------------------------------------------
   */
  update: async (req: Request, res: Response, next: NextFunction) => {
    var data = req.body;
    const { id } = req.params;

    const trx = await Reservations.startTransaction();
    

    try {
      await Reservations.query(trx)
        .patchAndFetchById(id, data)
        .throwIfNotFound({ message: "Reservations not found!" })
        .then((result) => res.json(result));
      await trx.commit();
    } catch (err) {
      // Delete file

      await trx.rollback();
      return next(err);
    }
  },

  /**
   * ---------------------------------------------------------------------
   * Destroy an instance of a model
   * ---------------------------------------------------------------------
   */
};
