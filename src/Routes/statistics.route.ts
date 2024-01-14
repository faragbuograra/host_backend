import { NextFunction, Request, Response } from "express";

import Feadback from "../Modules/Feedback/feeback.model";

import { User } from "../Modules/Users/user.model";

import Department from "../Modules/Department/department.model";

import { raw } from "objection";
import moment from "moment";
import Management from "../Modules/Decisions/decisions.model";
import Employ from "../Modules/employ/employ.model";

export const GetStatics = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await User.query()
    .count()
    .then((rows: any) => Number(rows[0].count));

  const todayusers = await User.query()
    .where(
      "created_at",
      ">",
      new Date().toISOString().slice(0, 10) + " 00:00:00"
    )
    .count()
    .then((rows: any) => Number(rows[0].count));


    const employ = await Employ.query()
    .count()
    .then((rows: any) => Number(rows[0].count));
    const todayemploy = await Employ.query()
    .where(
      "created_at",
      ">",
      new Date().toISOString().slice(0, 10) + " 00:00:00"
    )
    .count()
    .then((rows: any) => Number(rows[0].count));

  const statistics = {
    employ,
    management :0,
    users,
    Departments:0,
    todayusers,
    todayemploy
    //   mailto:mailStatistics,
  };

  res.json(statistics);
};
